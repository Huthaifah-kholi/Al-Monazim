import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewCache } from '@firebase/database/dist/esm/src/core/view/ViewCache';
import { LockScreenProvider } from '../../providers/lock-screen/lock-screen';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the EnableWifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enable-wifi',
  templateUrl: 'enable-wifi.html',
})
export class EnableWifiPage {
  @ViewChild('passwordToEnableWifi') passwordToEnableWifi;
  constructor(private gvp: GlobalVariablesProvider,private lockscreen: LockScreenProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnableWifiPage');
  }
  enableWifi(){
    
    if(this.passwordToEnableWifi.value === '123456789'){
      this.gvp.userData.mobileFlage = false
      this.lockscreen.connect()
    }
  }
}
