import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { StartPage } from '../start/start';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertProvider } from '../../providers/alert/alert';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild('userName') userName;
  @ViewChild('email') email;
  @ViewChild('password') password;
  @ViewChild('accountType') account_type;

  constructor(private alert:AlertProvider,private afAuth: AngularFireAuth, private afDB: AngularFireDatabase, public navCtrl: NavController) {
  }
  signup() {
    let User ={
      accountType: '',
      userName: '',
      toDoList: null,
      mobileFlage: null
    }
    User.accountType = this.account_type.value
    User.userName = this.userName.value
    if (this.account_type.value == 'son') {
      User.mobileFlage = "turnOn"
      for(let i=0; i<10; i++){
        User.toDoList = ['اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ', 'اعطيني امر ']
      }
    }

    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
      .then(
        (user) => {
          console.log("SignupPage ==> signup() ", user);
          this.afDB.database.ref('Users/' + user.uid).set(User)
            .then(
              (data) => {
                console.log("SignupPage ==> signup() ==> nav to login");
                this.navCtrl.push(LoginPage);
              }
            )
            .catch((error) => {
              this.alert.basicAlert(error);
              console.error()})
      }).catch((error) => {
        this.alert.basicAlert(error);
        console.error()
      })
  }

  goTomain() {
    // if (!params) params = {};
    this.navCtrl.push(StartPage);
  }
}
