import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ServerReqProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerReqProvider {

  constructor(public afDB: AngularFireDatabase) {
    console.log('Hello ServerReqProvider Provider')
  }
  setToDBByUrl(url, data){
    console.log("ServerReqProvider ==> setToDBByUrl()")
    return this.afDB.database.ref(url).set(data)
  }
}
