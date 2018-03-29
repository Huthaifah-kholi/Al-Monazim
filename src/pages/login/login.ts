import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';

let _this;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public gvp: GlobalVariablesProvider, public navCtrl: NavController, public menuCtrl: MenuController) {
    _this = this;
    this.menuCtrl.enable(false, 'myMenu');
  }
  signin() {
    console.log('LoginPage ==> signin()');

    this.afAuth.auth.signInWithEmailAndPassword("khalil@gmail.com", '123123').then(
    // this comment for test 
    // this.afAuth.auth.signInWithEmailAndPassword(_this.email.value, _this.password.value).then(

      (user) => {
        _this.getUserData(user.uid);
        _this.gvp.userData.userId = user.uid;
        console.log('LoginPage ==> signin() ==> signInWithEmailAndPassword()');
      }).catch(function (error) {
        console.log(error.message);
      })
  }

  goToMenuPage() {
    // if (!params) params = {};
    // this.navCtrl.push(MenuPage);
    this.navCtrl.setRoot(MenuPage, {}, { animate: true, direction: 'forward' });
  }
  goToSignupPage() {
    this.navCtrl.push(SignupPage);
  }
  getUserData(uid) {
    console.log('LoginPage ==> getUserData()');
    try {
      this.afDB.database.ref('Users/' + uid).on('value', snapshot => {
        console.log("return data from query",snapshot.val());
        console.log(snapshot.val().accountType);
        _this.gvp.userData.accountType = snapshot.val().accountType;
        _this.gvp.userData.userName = snapshot.val().userName;
        console.log("LoginPage ==> getUserData() ==> after set data", _this.gvp.userData.accountType, _this.gvp.userData.userName);
        _this.goToMenuPage();
      })
    } catch (error) {
      console.error(error);
    }
  }
}
