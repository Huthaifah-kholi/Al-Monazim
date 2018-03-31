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
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(
        (user) => {
          console.log("SignupPage ==> signup() ", user);
          this.afDB.database.ref('Users/' + user.uid).set({
            accountType: this.accountType.value,
            userName: this.userName.value,
            // email: this.email.value,
          })
          .then(
            (data) => {
              console.log("SignupPage ==> signup() ==> nav to login");
              this.navCtrl.push(LoginPage);            
            }
          )
            .catch((erorr) => console.error())
        }).catch((erorr) => console.error())
  }
  
  goTomain() {
    // if (!params) params = {};
    this.navCtrl.push(StartPage);
  }
}
