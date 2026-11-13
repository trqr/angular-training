import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuard } from './guards/auth/auth-guard';
import { Account } from './pages/account/account';
import { Login } from './pages/login/login';
import { ProductForm } from './pages/product-form/product-form';
import { Cart } from './pages/cart/cart';
import { MentionsLegales } from './pages/mentions-legales/mentions-legales';

export const routes: Routes = [
  { path: 'login', component: Login, title: 'Connexion — Training Shop' },
  { path: 'account', component: Account, canActivate: [authGuard], title: 'Mon compte — Training Shop' },
  { path: '', component: Home, title: 'Accueil — Training Shop' },
  { path: 'cart', component: Cart, title: 'Panier — Training Shop' },
  { path: 'products/new', component: ProductForm, title: 'Ajouter un produit — Training Shop' },
  { path: 'products/:id', component: ProductDetails, title: 'Produit — Training Shop' },
  { path: 'mentions-legales', component: MentionsLegales, title: 'Mentions légales — Training Shop' },
  { path: '**', component: NotFound, title: 'Page introuvable — Training Shop' },
];
