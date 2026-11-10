import { Component, input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product, catalog } from '../products';

@Component({
  imports: [ProductCard],
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  private products = catalog

  protected onAdd(product: Product) {
    console.log(product);
  }
}
