import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './Services/auth/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
    canActivate: [AuthService]
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthService]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./Pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./Pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./Pages/categories/categories.module').then(m => m.CategoriesPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'list',
    loadChildren: () => import('./Pages/list/list.module').then(m => m.ListPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'filter',
    loadChildren: () => import('./Pages/filter/filter.module').then(m => m.FilterPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./Pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule),
    canActivate: [AuthService]
  },  {
    path: 'cart',
    loadChildren: () => import('./Pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./Pages/history/history.module').then( m => m.HistoryPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
