import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderRequestDetailPage } from './provider-request-detail/provider-request-detail.page';

import { YourPrintsPage } from './your-prints.page';


const routes: Routes = [
  {
    path: '',
    component: YourPrintsPage
  },
  {
    path: 'provider-request-detail',
    loadChildren: () => import('./provider-request-detail/provider-request-detail.module').then( m => m.ProviderRequestDetailPageModule)
  },
  {
    path: 'provider-request-detail/:requestId',
    component: ProviderRequestDetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPrintsPageRoutingModule {}
