import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderRequestDetailPageRoutingModule } from './provider-request-detail-routing.module';

import { ProviderRequestDetailPage } from './provider-request-detail.page';

import { SafePipe } from 'src/app/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderRequestDetailPageRoutingModule
  ],
  declarations: [ProviderRequestDetailPage, SafePipe]
})
export class ProviderRequestDetailPageModule {}
