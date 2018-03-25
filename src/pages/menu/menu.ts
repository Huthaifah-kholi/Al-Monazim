import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { StartPage } from '../start/start';
import { NotificationsPage } from '../notifications/notifications';
import { TablePage } from '../table/table';
import { SonsAccountsPage } from '../sons-accounts/sons-accounts';
import { LoginPage } from '../login/login';

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
  constructor( public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
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
