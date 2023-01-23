import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoApiPage } from './no-api.page';

const routes: Routes = [
  {
    path: '',
    component: NoApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoApiPageRoutingModule {}
