import { Component, computed, inject, input } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product.model';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  cartService = inject(CartService);

  quantity = computed(() => this.cartService.getQuantityOf(this.product().id));

  onAddClick() {
    this.cartService.add(this.product());
  }

  onRemoveClick() {
    this.cartService.remove(this.product().id);
  }
}
