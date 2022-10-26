import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourPrintsPage } from './your-prints.page';

const routes: Routes = [
  {
    path: '',
    component: YourPrintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourPrintsPageRoutingModule {}
