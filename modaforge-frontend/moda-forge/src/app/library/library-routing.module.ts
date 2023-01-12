import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryPage } from './library.page';
import { ModelDetailPage } from './model-detail/model-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LibraryPage
  },
  {
    path: 'model-detail',
    loadChildren: () => import('./model-detail/model-detail.module').then( m => m.ModelDetailPageModule)
  },
  {
    path: 'model-detail/:modelId',
    component: ModelDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryPageRoutingModule {}
