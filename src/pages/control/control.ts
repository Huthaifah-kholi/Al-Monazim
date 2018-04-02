import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertProvider } from '../../providers/alert/alert';
import { ServerReqProvider } from '../../providers/server-req/server-req';

/**
 * Generated class for the ControlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let sonUid
@IonicPage()
@Component({
  selector: 'page-control',
  templateUrl: 'control.html',
})
export class ControlPage {
  user = {
    name: '',
    toDoList: null,
    mobileFlage: true
  }
  constructor(private serverReq: ServerReqProvider, private alert: AlertProvider, public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
    sonUid = this.navParams.data
    console.log("uid which pass from son account page is ,", sonUid)
    this.getData()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }
  getData() {
    console.log("ControlPage ==> getData()")
    this.afDB.database.ref(`Users/${sonUid}`).on('value', snapshpt => {
      this.user.name = snapshpt.val().userName
      this.user.mobileFlage = snapshpt.val().mobileFlage
      this.user.toDoList = snapshpt.val().toDoList
    })
  }
  change(i) {
    console.log("ControlPage ==> change()")
    let inputData = ''
    let title = 'غيّر الواجب'
    let msg = this.user.toDoList[i] + 'قم بتغيير مكونات '
    let inputs = [{
      name: 'task',
      placeholder: 'قم بتغيير المهمه'
    }]
    let url = `Users/${sonUid}/toDoList/${i}`
    this.alert.showPromptAndChangeTask(title, msg, inputs,url)
  }
  notify(){
    let url = `Users/${sonUid}/mobileFlage`
    this.serverReq.setToDBByUrl(url,this.user.mobileFlage)
  }
}
