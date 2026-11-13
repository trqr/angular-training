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
  lines = computed(() => {
    const grouped = new Map<number, { product: Product; quantity: number }>();

    for (const product of this.items()) {
      const line = grouped.get(product.id);
      if (line) {
        grouped.set(product.id, { product: line.product, quantity: line.quantity + 1 });
      } else {
        grouped.set(product.id, { product, quantity: 1 });
      }
    }

    return [...grouped.values()];
  });

  add(product: Product): void {
    this.items.update((items) => [...items, product]);
  }

  remove(productId: number): void {
    this.items.update((items) => items.filter((item) => item.id !== productId));
  }

  removeOne(productId: number): void {
    this.items.update((items) => {
      const index = items.findIndex((item) => item.id === productId);
      if (index < 0) {
        return items;
      }
      return items.filter((_, itemIndex) => itemIndex !== index);
    });
  }

  clear(): void {
    this.items.set([]);
  }

  getQuantityOf(productId: number): number {
    return this.items().filter((item) => item.id === productId).length;
  }
}
