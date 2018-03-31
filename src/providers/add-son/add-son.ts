import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the AddSonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddSonProvider {

  constructor(private afDB: AngularFireDatabase) {
    console.log('Hello AddSonProvider Provider');
  }
  addSon(parentUid,sonEmail) {
    console.log("AddSonProvider ==> addSon()");
    return this.afDB.database.ref('Users/' + parentUid + '/sons').push().set({
      email: sonEmail,
    })
  }
}
