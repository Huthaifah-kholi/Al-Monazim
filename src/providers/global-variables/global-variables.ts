// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//  export interface User {
//   userId: string;
//   accountType: string;
//   userName: string;
// }

@Injectable()
export class GlobalVariablesProvider {
  public userData = {
    userId: '',
    accountType: 'father',
    userName: 'rami'
  }
  public firebaseFlag = false;
  constructor() {
    console.log('Hello GlobalVariablesProvider Provider');
  }
}
