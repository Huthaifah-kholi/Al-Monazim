import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewSonPage } from './add-new-son';

@NgModule({
  declarations: [
    AddNewSonPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewSonPage),
  ],
})
export class AddNewSonPageModule {}
