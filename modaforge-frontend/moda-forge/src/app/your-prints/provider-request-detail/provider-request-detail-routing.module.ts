import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderRequestDetailPage } from './provider-request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderRequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRequestDetailPageRoutingModule {}
