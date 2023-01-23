import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptRequestPageRoutingModule } from './accept-request-routing.module';

import { AcceptRequestPage } from './accept-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptRequestPageRoutingModule
  ],
  declarations: [AcceptRequestPage]
})
export class AcceptRequestPageModule {}
