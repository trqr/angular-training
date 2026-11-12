import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  imports: [Button, RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  cartService = inject(CartService);
}
