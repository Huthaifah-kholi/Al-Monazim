import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';

let _this;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('password') password;
  
  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public menuCtrl: MenuController) {
    _this = this;
    this.menuCtrl.enable(false,'myMenu');
  }
  signin(){
    console.log("login progress");
    
    this.afAuth.auth.signInWithEmailAndPassword(_this.email.value, _this.password.value).then(
        (user) => {
          console.log(user.uid);
          _this.goToMenuPage();
        }).catch(function (error) {
          console.log(error.message);
        }) 
  }

  goToMenuPage(){
    // if (!params) params = {};
    // this.navCtrl.push(MenuPage);
    this.navCtrl.setRoot(MenuPage, {}, { animate: true, direction: 'forward' });
  }
  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }
}
