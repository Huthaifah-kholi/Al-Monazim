import { Injectable } from '@angular/core';
import { GlobalVariablesProvider } from '../global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LockScreenPage } from '../../pages/lock-screen/lock-screen';
import { MenuPage } from '../../pages/menu/menu';
import { Cordova } from '@ionic-native/core';
/*
  Generated class for the LockScreenProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LockScreenProvider {

  constructor(private backgroundMode: BackgroundMode, private gvp: GlobalVariablesProvider, private afDB: AngularFireDatabase) {
    console.log('Hello LockScreenProvider Provider');
    //
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
    setInterval(()=>{
      this.lockScreen(nav)
    },1000)
  }

  lockScreen(nav: NavController) {
    //userData.shouldLockScreen
    if (this.gvp.userData.mobileFlage === true) {
      this.backgroundMode.moveToForeground();
      nav.setRoot("LockScreenPage");
    }
    else if (this.gvp.isLockScreenActive === true){ 
      console.log("the flag is false now")
      nav.pop();
    }
  }
}
