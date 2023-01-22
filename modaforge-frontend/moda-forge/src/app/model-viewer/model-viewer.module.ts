import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelViewerPageRoutingModule } from './model-viewer-routing.module';

import { ModelViewerPage } from './model-viewer.page';

import { SafePipe } from '../app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelViewerPageRoutingModule
  ],
  declarations: [ModelViewerPage, SafePipe]
})
export class ModelViewerPageModule {}
