import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnableWifiPage } from './enable-wifi';

@NgModule({
  declarations: [
    EnableWifiPage,
  ],
  imports: [
    IonicPageModule.forChild(EnableWifiPage),
  ],
})
export class EnableWifiPageModule {}
