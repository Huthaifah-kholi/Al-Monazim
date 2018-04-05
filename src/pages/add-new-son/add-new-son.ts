import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AddSonProvider } from '../../providers/add-son/add-son';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the AddNewSonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let _navCtrl
@IonicPage()
@Component({
  selector: 'page-add-new-son',
  templateUrl: 'add-new-son.html',
})
export class AddNewSonPage {
  @ViewChild('sonEmail') sonEmail;
  constructor(private alert: AlertProvider, private asp: AddSonProvider, public gvp: GlobalVariablesProvider, public navCtrl: NavController, public navParams: NavParams) {
    _navCtrl = this.navCtrl
    console.log("AddNewSonPage constructor");
    this.gvp.firebaseFlag = true
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewSonPage');
    this.gvp.firebaseFlag = false
  }

  addNewSon() {
    try {
      this.asp.addSon(this.gvp.userData.userId, this.sonEmail.value)
        .then(
          (data) => {
            console.log("data returned from add son", data)
          }
        ).catch(
          (error) => console.error()
        ).then(
          (data) => {
            _navCtrl.popToRoot()
          }
        )
    } catch (error) {
      this.alert.basicAlert(error)
      console.error(error);
    }
  }
}