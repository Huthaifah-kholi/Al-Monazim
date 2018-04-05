import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';
import { LockScreenProvider } from '../../providers/lock-screen/lock-screen';



@Component({
  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

  constructor(public lockscreen:LockScreenProvider, private backgroundMode: BackgroundMode,private gvp:GlobalVariablesProvider,private afDB :AngularFireDatabase) {
    // this.lockscreen.listenToMobile()
  }

  
}
