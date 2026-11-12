import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductApiService } from '../../services/product-api/product-api.service';
import { Product } from '../../models/product.model';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  id = input.required<string>();
  productsService = inject(ProductApiService);
  product = signal<Product | undefined>(undefined);
  loading = signal(true);

  async ngOnInit(): Promise<void> {
    try {
      this.product.set(await this.productsService.getById(Number(this.id())));
    } catch {
      this.product.set(undefined); // 404, ou réseau coupé : le @else affiche « Produit introuvable »
    } finally {
      this.loading.set(false);
    }
  }
}
