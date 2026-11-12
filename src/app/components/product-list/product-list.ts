import { Component, inject, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductApiService } from '../../services/product-api/product-api.service';
import { Product } from '../../models/product.model';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  protected products = signal<Product[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  productsService = inject(ProductApiService);

  async ngOnInit() {
    try {
      this.products.set(await this.productsService.getAll());
    } catch {
      this.error.set('Le catalogue est indisponible. Réessaie dans un instant.');
    } finally {
      this.loading.set(false);
    }
  }
}
