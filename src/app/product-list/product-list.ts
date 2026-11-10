import { Component, input, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product, catalog } from '../products';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private products = catalog

  cart = signal<Product[]>([]);

  onAdd(product: Product) {
    this.cart.update(cart => [...cart, product]);
  }

  onRemove(product: Product) {
    this.cart.update(cart => cart.filter(item => product !== item))
  }

  onClear(): void {
    this.cart.set([]);
  }
}
