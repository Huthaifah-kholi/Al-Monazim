// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
 export interface User {
  // userId: number;
  accountType: string;
  userName: string;
}

@Injectable()
export class GlobalVariablesProvider {
  public userData: User;
  constructor() {
    console.log('Hello GlobalVariablesProvider Provider');
  }
}
