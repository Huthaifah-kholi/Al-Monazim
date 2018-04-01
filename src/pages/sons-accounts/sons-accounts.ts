import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AddNewSonPage } from '../add-new-son/add-new-son';
import { ControlPage } from '../control/control';

let keys = []
let Sons = [];
let _snapshpt
@Component({
  selector: 'page-sons-accounts',
  templateUrl: 'sons-accounts.html'
})
export class SonsAccountsPage {
  // let keys: any;
  // let _snapshpt;
  sons = Sons
  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public gvp: GlobalVariablesProvider) {
    console.log("SonsAccountsPage constructor");
    this.getSons()    
    
  }
  goToAddNewPage() {
    this.navCtrl.push(AddNewSonPage);
  }
  clearPreviousSons(){
    keys = []
    Sons = []
  }
  getSons() {
    if(this.gvp.FirstReq === false){
      this.clearPreviousSons()
    }
    this.gvp.FirstReq = false
      this.afDB.database.ref(`Users/${this.gvp.userData.userId}/sons`).once('value', snapshpt => {
        _snapshpt = snapshpt
      }).then(
        this.toArrayOfEmails
      )
  }
  toArrayOfEmails(){
    _snapshpt.forEach(function(item) {
      let itemVal = item.val();
      keys.push(itemVal);
    })
    for (let i = 0; i < keys.length; i++) {
      Sons.push(keys[i].email);
    }
    console.log("Sons array",Sons);
  }

  itemSelected(son) {
    this.navCtrl.push(ControlPage)
  }
}
