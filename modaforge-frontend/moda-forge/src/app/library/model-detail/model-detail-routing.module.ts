import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelDetailPage } from './model-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ModelDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelDetailPageRoutingModule {}
