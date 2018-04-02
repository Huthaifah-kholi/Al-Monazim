import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ServerReqProvider } from '../server-req/server-req';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
  inputedData =''
  constructor(public alertCtrl: AlertController, private serverReq: ServerReqProvider) {
    console.log('Hello AlertProvider Provider');
  }
  showPromptAndChangeTask(title, msg , inputs,url){
    let prompt = this.alertCtrl.create({
      title: title,
      message: msg,
      inputs: inputs,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('AlertProvider ==> showPrompt() result = Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('AlertProvider ==> showPrompt() result = Saved clicked',data);
            this.serverReq.setToDBByUrl(url, data.task).then(
              (d) => console.log("after returned from server req to change the task ", d)
            )
          }
        }
      ]
    });
    prompt.present()
  }
}
