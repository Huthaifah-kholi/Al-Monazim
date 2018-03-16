import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';
import { SignupPage } from '../signup/signup';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToMainPage(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }
  goToSignupPage(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
}
