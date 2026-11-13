import { Component, computed, inject } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cartService = inject(CartService);

  cartLabel = computed(() => {
    const count = this.cartService.count();
    const noun = count === 1 ? 'article' : 'articles';
    return `Panier : ${count} ${noun} · ${this.cartService.total()} €`;
  });
}
