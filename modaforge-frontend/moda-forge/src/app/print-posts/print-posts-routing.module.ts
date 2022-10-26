import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintPostsPage } from './print-posts.page';

const routes: Routes = [
  {
    path: '',
    component: PrintPostsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintPostsPageRoutingModule {}
