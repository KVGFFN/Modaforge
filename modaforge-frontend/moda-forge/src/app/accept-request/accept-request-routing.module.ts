import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptRequestPage } from './accept-request.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptRequestPageRoutingModule {}
