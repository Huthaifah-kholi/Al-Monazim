import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AddNewSonPage } from '../add-new-son/add-new-son';
import { ControlPage } from '../control/control';

let keys = []
let SonsName = []
let sonsIds = []
let _snapshpt
let _this 
@Component({
  selector: 'page-sons-accounts',
  templateUrl: 'sons-accounts.html'
})
export class SonsAccountsPage {
  // let keys: any;
  // let _snapshpt;
  sonsName = SonsName
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public gvp: GlobalVariablesProvider) {
    console.log("SonsAccountsPage constructor");
    _this = this
    _this.getSons()
  }
  goToAddNewPage() {
    _this.navCtrl.push(AddNewSonPage);
  }
  clearPreviousSons() {
    console.log("SonsAccountsPage ==> clearPreviousSons()")
    keys = []
    SonsName = []
    sonsIds = []
  }
  getSons() {
    console.log("SonsAccountsPage ==> getSons()")
    if (_this.gvp.FirstReq === false) {
      _this.clearPreviousSons()
    }
    _this.gvp.FirstReq = false
    _this.afDB.database.ref(`Users/${_this.gvp.userData.userId}/sons`).once('value', snapshpt => {
      _snapshpt = snapshpt
    }).then(
      _this.toArrayOfUids
    )
    .then(
      _this.getUsersNameByUid
    )
  }
  toArrayOfUids() {
    console.log("SonsAccountsPage ==> toArrayOfUids()")
    _snapshpt.forEach(function (item) {
      let itemVal = item.val();
      keys.push(itemVal);
    })
    for (let i = 0; i < keys.length; i++) {
      sonsIds.push(keys[i].uid);
    }
    console.log("Sons UIds array", sonsIds)
  }

  itemSelected(son) {
    console.log("SonsAccountsPage ==> itemSelected()")
    let index = _this.getUidFromUidArray(son)
    _this.navCtrl.push(ControlPage, sonsIds[index])
  }
  getUidFromUidArray(son) {
    console.log("SonsAccountsPage ==> getUidFromUidArray()")
    return _this.sonsName.indexOf(son)
  }
  getUsersNameByUid() {
    console.log("SonsAccountsPage ==> getUsersNameByUid()")
    // let name = _this.getUserName

    for (let i = 0; i < sonsIds.length; i++) {
      _this.afDB.database.ref(`Users/${sonsIds[i]}`).once('value', snapshpt => {
        console.log("user Name after requset userName bu id ", snapshpt.val().userName);
        SonsName.push(snapshpt.val().userName)
      })
      // SonsName.push(name(sonsIds[i]))
    }
  }
  getUserName(uid) {
    console.log("SonsAccountsPage ==> getUserName()")
    _this.afDB.database.ref(`Users/${uid}`).once('value', snapshpt => {
      console.log("user Name after requset userName bu id ", snapshpt.val().userName);
      return snapshpt.val().userName
    })
  }
}
