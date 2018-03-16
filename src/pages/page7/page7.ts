import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page6Page } from '../page6/page6';
import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage6(params){
    if (!params) params = {};
    this.navCtrl.push(Page6Page);
  }goToPage1(params){
    if (!params) params = {};
    this.navCtrl.push(Page1Page);
  }
}
