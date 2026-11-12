import { computed, Service, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Service()
export class CartService {
  private readonly items = signal<Product[]>([]);

  constructor() {
    console.log("🛒 Un panier vient d'être fabriqué");
  }

  count = computed(() => this.items().length);
  total = computed(() => this.items().reduce((total, item) => total + item.price, 0).toFixed(2));

  add(product: Product): void {
    this.items.update((items) => [...items, product]);
  }

  remove(productId: number): void {
    this.items.update((items) => items.filter((item) => item.id !== productId));
  }

  clear(): void {
    this.items.set([]);
  }

  getQuantityOf(productId: number): number {
    return this.items().filter((item) => item.id === productId).length;
  }
}
