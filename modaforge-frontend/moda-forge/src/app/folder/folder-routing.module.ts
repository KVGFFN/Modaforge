import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../home/home.component').then(m => m.HomeComponent)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
