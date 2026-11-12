import { Component, computed, input } from '@angular/core';
import { catalog } from '../../products';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  id = input.required<string>();

  product = computed(() => catalog.find((p) => p.id === Number(this.id())));
}
