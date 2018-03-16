import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';


import { Page6Page } from '../pages/page6/page6';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = Page6Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPage1(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page1Page);
  }goToPage2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page2Page);
  }goToPage3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page3Page);
  }goToPage4(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page4Page);
  }goToPage6(params){
    if (!params) params = {};
    this.navCtrl.setRoot(Page6Page);
  }
}
