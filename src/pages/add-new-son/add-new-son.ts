import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';

/**
 * Generated class for the AddNewSonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-son',
  templateUrl: 'add-new-son.html',
})
export class AddNewSonPage {
  @ViewChild('sonEmail') sonEmail;
  constructor(public gvp: GlobalVariablesProvider, public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewSonPage');
  }

  addNewSon(){
    console.log("AddNewSonPage ==> addNewSon()");
    try {
      this.afDB.database.ref('Users/').orderByKey().on("value",
        (sd) => console.log("AddNewSonPage ==> addNewSon() ==> get Data ",sd.val())
      )
    } catch (error) {
      console.error(error);
    }
  }
}
