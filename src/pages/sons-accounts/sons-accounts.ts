import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalVariablesProvider } from '../../providers/global-variables/global-variables';
import { AddNewSonPage } from '../add-new-son/add-new-son';

@Component({
  selector: 'page-sons-accounts',
  templateUrl: 'sons-accounts.html'
})
export class SonsAccountsPage {

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, public gvp: GlobalVariablesProvider) {
    console.log("SonsAccountsPage constructor");
    
  }
  goToAddNewPage(){
    this.navCtrl.push(AddNewSonPage);
  }
  
}
