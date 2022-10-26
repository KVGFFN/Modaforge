import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearYouPageRoutingModule } from './near-you-routing.module';

import { NearYouPage } from './near-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearYouPageRoutingModule
  ],
  declarations: [NearYouPage]
})
export class NearYouPageModule {}
