import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false,'myMenu');
  }
  goToMenuPage(params){
    if (!params) params = {};
    // this.navCtrl.push(MenuPage);
    this.navCtrl.setRoot(MenuPage, {}, { animate: true, direction: 'forward' });
  }
  goToSignupPage(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
