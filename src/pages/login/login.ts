import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
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
