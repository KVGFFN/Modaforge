import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestBarPageRoutingModule } from './request-bar-routing.module';

import { RequestBarPage } from './request-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestBarPageRoutingModule
  ],
  declarations: [RequestBarPage]
})
export class RequestBarPageModule {}
