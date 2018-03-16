import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }
}
