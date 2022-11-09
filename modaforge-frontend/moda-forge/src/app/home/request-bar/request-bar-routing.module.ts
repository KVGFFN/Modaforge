import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestBarPage } from './request-bar.page';

const routes: Routes = [
  {
    path: '',
    component: RequestBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestBarPageRoutingModule {}
