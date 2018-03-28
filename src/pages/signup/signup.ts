import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StartPage } from '../start/start';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild('userName') userName;
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('accountType') accountType;

  constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public navCtrl: NavController) {
  }
  signup() {
    // this sign up using email/pass only ** 
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(
        (user) => {
          console.log("email & pass are auth ", user);
          this.afDB.database.ref('Users/Users/' + user.uid).set({
            accountType: this.accountType.value,
            userName: this.userName.value
          })
          .then(
            (data) => {
              console.log("returend data after add custom data to authnticated user :", data);
              this.navCtrl.push(LoginPage);            }
          )
            .catch((erorr) => console.error())
        }).catch((erorr) => console.error())
  }
  
  goTomain() {
    // if (!params) params = {};
    this.navCtrl.push(StartPage);
  }
}
