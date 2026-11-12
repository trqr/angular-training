import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product, ProductCreationRequest, ProductsResponse } from '../../models/product.model';

@Service()
export class ProductApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://dummyjson.com/products';

  async getAll(): Promise<Product[]> {
    const res = await firstValueFrom(this.http.get<ProductsResponse>(`${this.baseUrl}?limit=12`));
    return res.products;
  }

  async getById(id: number): Promise<Product> {
    return await firstValueFrom(this.http.get<Product>(`${this.baseUrl}/${id}`));
  }

  async add(product: ProductCreationRequest): Promise<Product> {
    return await firstValueFrom(this.http.post<Product>(`${this.baseUrl}/add`, product));
  }
}
