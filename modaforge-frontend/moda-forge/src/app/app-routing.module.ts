import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LibraryPage } from './library/library.page';
import { LoginPage } from './login/login.page';


const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePage
  // },
  // {
  //   path: 'library',
  //   component: LibraryPage
  // }

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
  {
    path: 'print-posts',
    loadChildren: () => import('./print-posts/print-posts.module').then( m => m.PrintPostsPageModule)
  },
  {
    path: 'printers',
    loadChildren: () => import('./printers/printers.module').then( m => m.PrintersPageModule)
  },
  {
    path: 'near-you',
    loadChildren: () => import('./near-you/near-you.module').then( m => m.NearYouPageModule)
  },
  {
    path: 'your-prints',
    loadChildren: () => import('./your-prints/your-prints.module').then( m => m.YourPrintsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  }







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
