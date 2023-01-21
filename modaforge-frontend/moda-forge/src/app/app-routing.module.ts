import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LibraryPage } from './library/library.page';
import { RegisterPage } from './register/register.page';
import { TestPage } from './test/test.page';
import { AuthGuard } from 'src/helpers/authguard';


const routes: Routes = 
[
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.LoginPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'print-posts',
    loadChildren: () => import('./print-posts/print-posts.module').then( m => m.PrintPostsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'printers',
    loadChildren: () => import('./printers/printers.module').then( m => m.PrintersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'near-you',
    loadChildren: () => import('./near-you/near-you.module').then( m => m.NearYouPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'your-prints',
    loadChildren: () => import('./your-prints/your-prints.module').then( m => m.YourPrintsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'test',
    component: TestPage,
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
