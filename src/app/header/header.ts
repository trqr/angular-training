import { Component, computed, input, output, signal } from '@angular/core';
import { Button } from '../button/button';
import { Product } from '../products';

@Component({
  imports: [Button],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cart = input<Product[]>([]);
  clearCart = output<void>();


  count2= this.cart().length;

  count = computed(() => this.cart().length); // se recalcule quand cart change
  total = computed(() => this.cart().reduce((sum, product) => sum + product.price, 0));
}
