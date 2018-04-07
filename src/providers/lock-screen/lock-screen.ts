import { Injectable } from '@angular/core';
import { GlobalVariablesProvider } from '../global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LockScreenPage } from '../../pages/lock-screen/lock-screen';
import { MenuPage } from '../../pages/menu/menu';
import { Cordova } from '@ionic-native/core';
import { ServerReqProvider } from '../server-req/server-req';
import { AlertProvider } from '../alert/alert';
/*
  Generated class for the LockScreenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
declare var cordova: any;

@Injectable()
export class LockScreenProvider {
  constructor(private alert: AlertProvider, private backgroundMode: BackgroundMode, private gvp: GlobalVariablesProvider, private afDB: AngularFireDatabase, private serverReq: ServerReqProvider) {
    console.log('Hello LockScreenProvider Provider');
  }

  listenToMobile(nav: NavController) {
    console.log("LockScreenProvider ==> listenToMobile()");

    try {
      this.afDB.database.ref('Users/' + this.gvp.userData.userId + '/mobileFlage/')
        .on('value', snapshot => {
          this.gvp.userData.mobileFlage = snapshot.val()
          this.lockScreen(nav)
          console.log("LockScreenProvider ==> listenToMobile(), sucess")
        }
        )
    } catch (error) {
      console.error();
    }
    setInterval(() => {
      this.lockScreen(nav)
    }, 1000)
  }

  lockScreen(nav: NavController) {
    console.log("LockScreenProvider ==> lockScreen()")
    //userData.shouldLockScreen
    if (this.gvp.userData.mobileFlage === true) {
      console.log("the flag is true now")
      // // watch network for a disconnect
      this.disconnect()
      // this.backgroundMode.moveToForeground()
      // nav.setRoot("LockScreenPage")
    }
    else if (this.gvp.isLockScreenActive === true) {
      console.log("the flag is false now")
    }
  }
  disconnect() {
    cordova.plugins.WifiManager.disconnect((e) => console.log('fail', e), (s) => console.log('success', s))
  }
  connect() {
    let wifiStatus
    console.log("LockScreenProvider ==> connect()")
    cordova.plugins.WifiManager.reconnect((e) => console.log('fail', e), (s) => console.log('success', s))
    // let w = cordova.plugins.WifiManager.getWifiState((e) => console.log('fail', e),wifiStatus)
    this.serverReq.setToDBByUrl('Users/' + this.gvp.userData.userId + '/mobileFlage/', false).then(
      (success) => {
        console.log("success set mobile falge", success);
      }
    ).catch(
      (error) => {
        this.alert.basicAlert(error)
      }
    )
  }
}