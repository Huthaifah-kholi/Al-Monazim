import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StartPage } from '../pages/start/start';
import { NotificationsPage } from '../pages/notifications/notifications';
import { TablePage } from '../pages/table/table';
import { SonsAccountsPage } from '../pages/sons-accounts/sons-accounts';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MenuPage } from '../pages/menu/menu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// imports for firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MenuPageModule } from '../pages/menu/menu.module';

// firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyD86KeQnNzxMPQR-4SZXK5NPrXo31lXtBY",
  authDomain: "monazim-ebacc.firebaseapp.com",
  databaseURL: "https://monazim-ebacc.firebaseio.com",
  projectId: "monazim-ebacc",
  storageBucket: "monazim-ebacc.appspot.com",
  messagingSenderId: "527874869762"
};

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    NotificationsPage,
    TablePage,
    SonsAccountsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    MenuPageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    StartPage,
    NotificationsPage,
    TablePage,
    SonsAccountsPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}