import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Nav } from 'ionic-angular';
import { StartPage } from '../start/start';
import { NotificationsPage } from '../notifications/notifications';
import { TablePage } from '../table/table';
import { SonsAccountsPage } from '../sons-accounts/sons-accounts';
import { LoginPage } from '../login/login';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { LockScreenProvider } from '../../providers/lock-screen/lock-screen';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = StartPage;
  viewAcountPage: boolean = false;
  viewTablePage: boolean = true;
  constructor(public lockscreen:LockScreenProvider,public gvp: GlobalVariablesProvider, public navParams: NavParams) {
    this.isParent();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
    this.lockscreen.listenToMobile(this.navCtrl);
  }
  isParent() {
    console.log('MenuPage => isParent()');
    
    if (this.gvp.userData.accountType == 'father') {
      this.viewAcountPage = true;
      this.viewTablePage = false;
    }
      
  }
  goToStartPage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(StartPage);
  } goToNotificationsPage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(NotificationsPage);
  } goToTablePage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(TablePage);
  } goToSonsAccountsPage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(SonsAccountsPage);
  } goToLoginPage(params) {
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage, {}, { animate: true, direction: 'forward' });
  }
}
