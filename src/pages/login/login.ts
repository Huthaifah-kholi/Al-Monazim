import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StartPage } from '../start/start';
import { SignupPage } from '../signup/signup';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToStartPage(params){
    if (!params) params = {};
    this.navCtrl.push(StartPage);
  }
  goToSignupPage(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
