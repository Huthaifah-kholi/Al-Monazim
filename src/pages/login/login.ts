import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertProvider } from '../../providers/alert/alert';

let _this;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private alert: AlertProvider,
    private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public gvp: GlobalVariablesProvider, public navCtrl: NavController, public menuCtrl: MenuController) {
    _this = this;
    this.menuCtrl.enable(false, 'myMenu');
    _this.gvp.firebaseFlag = true;
  }
  ionViewWillEnter() {
    console.log("LoginPage ==> ionViewWillEnter()");
    let user =this.afAuth.auth.currentUser
    if (user) {
      console.log("login user ?",user);
      this.goToMenuPage()
    }
  }
  signin() {
    console.log('LoginPage ==> signin()');

    // this.afAuth.auth.signInWithEmailAndPassword("amr@gmail.com", '123123').then(
    // this comment for test 
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(
      (user) => {
        this.getUserData(user.uid);
        this.gvp.userData.userId = user.uid;
        console.log('LoginPage ==> signin() ==> signInWithEmailAndPassword()');
      }).catch(function (error) {
        console.log("eror on email & password")
        this.alert.basicAlert(error)
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
    console.log("flage on getuser", this.gvp.firebaseFlag);

    console.log('LoginPage ==> getUserData()');
    try {
      this.afDB.database.ref('Users/' + uid).on('value', snapshot => {
        if (_this.gvp.firebaseFlag === true) {
          _this.gvp.firebaseFlag = false;
          console.log("return data from query", snapshot.val());
          console.log(snapshot.val().accountType);
          _this.gvp.userData.accountType = snapshot.val().accountType;
          _this.gvp.userData.userName = snapshot.val().userName;
          console.log("LoginPage ==> getUserData() ==> after set data", _this.gvp.userData.accountType, _this.gvp.userData.userName);
          _this.goToMenuPage();
        }
      })
    } catch (error) {
      _this.alert.basicAlert(error)
      console.error(error);
    }

  }
}
