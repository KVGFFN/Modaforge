import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintersPage } from './printers.page';

const routes: Routes = [
  {
    path: '',
    component: PrintersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintersPageRoutingModule {}
