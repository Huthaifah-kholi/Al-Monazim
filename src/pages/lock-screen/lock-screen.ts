import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the LockScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  constructor(public gvp: GlobalVariablesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.gvp.isLockScreenActive = true
    console.log('ionViewDidLoad LockScreenPage');
  }
  ionViewDidLeave() {
    this.gvp.isLockScreenActive = false
    console.log('ionViewDidLeave LockScreenPage');
  }
}
