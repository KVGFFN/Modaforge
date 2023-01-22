import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModelDetailPageRoutingModule } from './model-detail-routing.module';
import { ModelDetailPage } from './model-detail.page';
import { SafePipe } from 'src/app/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelDetailPageRoutingModule
  ],
  declarations: [ModelDetailPage, SafePipe],
  providers: [SafePipe]
})
export class ModelDetailPageModule {}
