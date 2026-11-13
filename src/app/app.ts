import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Layout } from './pages/layout/layout';

@Component({
  imports: [RouterOutlet, RouterLink, Layout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
