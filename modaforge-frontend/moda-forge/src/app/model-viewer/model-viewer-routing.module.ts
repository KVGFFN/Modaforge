import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelViewerPage } from './model-viewer.page';

const routes: Routes = [
  {
    path: '',
    component: ModelViewerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelViewerPageRoutingModule {}
