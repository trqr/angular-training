import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  imports: [Header],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
