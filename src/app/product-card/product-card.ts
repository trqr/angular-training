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
  addToCard = output<Product>();

  onAddClick() {
    this.addToCard.emit(this.product());
  }
}
