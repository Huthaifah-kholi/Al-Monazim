import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LockScreenProvider } from '../../providers/lock-screen/lock-screen';

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html'
})
export class NotificationsPage {

  constructor(public lockscreen:LockScreenProvider,public navCtrl: NavController) {
  }
  
}
