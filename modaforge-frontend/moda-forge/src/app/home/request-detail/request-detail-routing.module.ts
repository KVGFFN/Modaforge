import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestDetailPage } from './request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestDetailPageRoutingModule {}
