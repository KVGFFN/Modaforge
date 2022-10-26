import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourPrintsPageRoutingModule } from './your-prints-routing.module';

import { YourPrintsPage } from './your-prints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourPrintsPageRoutingModule
  ],
  declarations: [YourPrintsPage]
})
export class YourPrintsPageModule {}
