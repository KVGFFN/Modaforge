import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearYouPage } from './near-you.page';

const routes: Routes = [
  {
    path: '',
    component: NearYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearYouPageRoutingModule {}
