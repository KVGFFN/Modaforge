import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibraryPageRoutingModule } from './library-routing.module';

import { LibraryPage } from './library.page';

import { ModelComponent } from './model/model.component';
import {SafePipe} from "../app.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibraryPageRoutingModule,
  ],
    declarations: [LibraryPage, ModelComponent, SafePipe]
})
export class LibraryPageModule {}
