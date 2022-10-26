import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintersPageRoutingModule } from './printers-routing.module';

import { PrintersPage } from './printers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintersPageRoutingModule
  ],
  declarations: [PrintersPage]
})
export class PrintersPageModule {}
