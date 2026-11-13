import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Product, ProductCreationRequest, ProductsResponse } from '../../models/product.model';

@Service()
export class ProductApiService {
  private readonly http = inject(HttpClient);
  private readonly prefix = '/products';

  async getAll(): Promise<Product[]> {
    const res = await firstValueFrom(this.http.get<ProductsResponse>(`${this.prefix}?limit=12`));
    return res.products;
  }

  async getById(id: number): Promise<Product> {
    return await firstValueFrom(this.http.get<Product>(`${this.prefix}/${id}`));
  }

  async add(product: ProductCreationRequest): Promise<Product> {
    return await firstValueFrom(this.http.post<Product>(`${this.prefix}/add`, product));
  }
}

//
