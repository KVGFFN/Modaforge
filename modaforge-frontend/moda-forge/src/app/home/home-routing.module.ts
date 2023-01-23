import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RequestBarPage } from './request-bar/request-bar.page';
import { RequestDetailPage } from './request-detail/request-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'request-bar',
    component: RequestBarPage,
    loadChildren: () => import('./request-bar/request-bar.module').then( m => m.RequestBarPageModule)
  },
  {
    path: 'request-detail',
    loadChildren: () => import('./request-detail/request-detail.module').then( m => m.RequestDetailPageModule)
  },
  {
    path: 'request-detail/:requestId',
    component: RequestDetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
