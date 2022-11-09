import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestBarPage } from './request-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RequestBarPage
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.component').then( m => m.RequestComponent)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestBarPageRoutingModule {}
