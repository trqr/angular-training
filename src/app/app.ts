import { Component, signal } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Header } from './header/header';

@Component({
  imports: [ProductList, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('training');
}
