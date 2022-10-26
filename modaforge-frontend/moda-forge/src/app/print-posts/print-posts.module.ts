import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintPostsPageRoutingModule } from './print-posts-routing.module';

import { PrintPostsPage } from './print-posts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintPostsPageRoutingModule
  ],
  declarations: [PrintPostsPage]
})
export class PrintPostsPageModule {}
