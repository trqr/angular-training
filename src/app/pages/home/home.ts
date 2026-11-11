import { Component, signal } from '@angular/core';
import { ProductList } from '../../product-list/product-list';
import { Product } from '../../products';
import { Header } from '../../header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ProductList, Header, RouterOutlet],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  cart = signal<Product[]>([]);

  onAdd(product: Product) {
    this.cart.update((cart) => [...cart, product]);
  }

  onRemove(product: Product) {
    this.cart.update((cart) => cart.filter((item) => product !== item));
  }

  onClear(): void {
    this.cart.set([]);
  }
}
