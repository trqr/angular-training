import { Component, input, output, signal } from '@angular/core';
import { Button } from '../button/button';
import { Product } from '../products';

@Component({
  imports: [Button],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<Product>();
  clearCart = output<Product>();

  onAddClick() {
    this.addToCart.emit(this.product());
  }

  onClearClick(): void {
    this.clearCart.emit(this.product());
  }
}
