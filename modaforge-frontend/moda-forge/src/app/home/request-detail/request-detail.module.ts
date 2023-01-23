import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestDetailPageRoutingModule } from './request-detail-routing.module';

import { RequestDetailPage } from './request-detail.page';

import { SafePipe } from 'src/app/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestDetailPageRoutingModule
  ],
  declarations: [RequestDetailPage, SafePipe]
})
export class RequestDetailPageModule {}
