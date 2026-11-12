import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuard } from './guards/auth/auth-guard';
import { Account } from './pages/account/account';
import { Login } from './pages/login/login';
import { ProductForm } from './pages/product-form/product-form';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'account', component: Account, canActivate: [authGuard] },
  { path: '', component: Home },
  { path: 'products/new', component: ProductForm },
  { path: 'products/:id', component: ProductDetails },
  { path: '**', component: NotFound },
];
