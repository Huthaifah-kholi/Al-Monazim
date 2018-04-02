import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-table',
  templateUrl: 'table.html'
})
export class TablePage {
  user = {
    name: '',
    toDoList: null,
    mobileFlage: true
  }
  constructor(public navCtrl: NavController,private gvp:GlobalVariablesProvider,private afDB: AngularFireDatabase) {
    this.getToDoList()
  }
  getToDoList() {
    console.log("TablePage ==> getData()")
    this.afDB.database.ref(`Users/${this.gvp.userData.userId}`).on('value', snapshpt => {
      this.user.name = snapshpt.val().userName
      this.user.mobileFlage = snapshpt.val().mobileFlage
      this.user.toDoList = snapshpt.val().toDoList
    })
  }
}
