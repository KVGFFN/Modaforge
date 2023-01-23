import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoApiPageRoutingModule } from './no-api-routing.module';

import { NoApiPage } from './no-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoApiPageRoutingModule
  ],
  declarations: [NoApiPage]
})
export class NoApiPageModule {}
