import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RequestBarPage } from './request-bar/request-bar.page';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request-bar/request/request.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, RequestBarPage, MapComponent, RequestComponent]
})
export class HomePageModule {}
