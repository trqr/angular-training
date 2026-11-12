import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot, min, minLength, pattern, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { Button } from '../../components/button/button';
import { emptyProduct, ProductCreationRequest } from '../../models/product.model';
import { ProductApiService } from '../../services/product-api/product-api.service';

@Component({
  imports: [FormField, JsonPipe, FormRoot, Button],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  product = signal<ProductCreationRequest>(emptyProduct);
  productService = inject(ProductApiService);

  productForm = form(
    this.product,
    (path) => {
      required(path.title, { message: 'Le titre est obligatoire' });
      required(path.price, { message: 'Le prix est obligatoire' });
      min(path.price, 2, { message: 'Le prix doit être supérieur à 2€' });
      required(path.stock, { message: 'La quantité en stock est obligatoire' });
      min(path.stock, 0, { message: 'Le stock ne peut pas être négatif.' });
      required(path.thumbnail, { message: "L'url de l'image est obligatoire" });
      minLength(path.thumbnail, 4, { message: "L'URL doit contenir au moins un caractère" });
      pattern(path.thumbnail, /^https?:\/\/.+\.(png|jpe?g|webp|gif)$/i, {
        message: "L'URL doit commencer par http(s):// et finir par .png, .jpg, .webp ou .gif",
      });
    },
    { submission: { action: async () => this.send() } },
  );

  sent = signal<ProductCreationRequest | null>(null);
  async send(): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    const res = await this.productService.add(this.product());
    this.sent.set(res);
    this.productForm().reset(emptyProduct);
  }
}
