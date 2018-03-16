import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }
  goToLoginPage(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goTomain(params){
    if (!params) params = {};
    this.navCtrl.push(MainPage);
  }
}
