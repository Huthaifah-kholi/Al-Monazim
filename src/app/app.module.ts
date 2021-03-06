import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// pages 
import { StartPage } from '../pages/start/start';
import { NotificationsPage } from '../pages/notifications/notifications';
import { TablePage } from '../pages/table/table';
import { SonsAccountsPage } from '../pages/sons-accounts/sons-accounts';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MenuPage } from '../pages/menu/menu';
import { MenuPageModule } from '../pages/menu/menu.module';
import { AddNewSonPage } from '../pages/add-new-son/add-new-son';
import { EnableWifiPage } from '../pages/enable-wifi/enable-wifi';

// imports for firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// gloable variable as service
import { GlobalVariablesProvider } from '../providers/global-variables/global-variables';
import { AddSonProvider } from '../providers/add-son/add-son';
import { ControlPage } from '../pages/control/control';
import { AlertProvider } from '../providers/alert/alert';
import { ServerReqProvider } from '../providers/server-req/server-req';
import { LockScreenProvider } from '../providers/lock-screen/lock-screen';

// plugins - ionc native
import { BackgroundMode } from '@ionic-native/background-mode';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

// pipes
import { YoutubePipe } from '../pipes/youtube/youtube';
import { LockScreenPage } from '../pages/lock-screen/lock-screen';

// firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyD86KeQnNzxMPQR-4SZXK5NPrXo31lXtBY",
  authDomain: "monazim-ebacc.firebaseapp.com",
  databaseURL: "https://monazim-ebacc.firebaseio.com",
  projectId: "monazim-ebacc",
  storageBucket: "monazim-ebacc.appspot.com",
  messagingSenderId: "527874869762"
};
// 
@NgModule({
  declarations: [
    MyApp,
    StartPage,
    NotificationsPage,
    TablePage,
    SonsAccountsPage,
    LoginPage,
    SignupPage,
    AddNewSonPage,
    ControlPage,
    EnableWifiPage,
    LockScreenPage,
    YoutubePipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    MenuPageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
    SignupPage,
    AddNewSonPage,
    EnableWifiPage,
    ControlPage,
    LockScreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVariablesProvider,
    AddSonProvider,
    AlertProvider,
    ServerReqProvider,
    BackgroundMode,
    LockScreenProvider,
    YoutubeVideoPlayer,
  ]
})
export class AppModule {}