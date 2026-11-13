import { Component, inject } from '@angular/core';
import { Button } from '../../components/button/button';
import { CartService } from '../../services/cart/cart.service';

@Component({
  imports: [Button],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  private readonly cart = inject(CartService);
}
