import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  variant = input<'contained' | 'outlined' | 'ghost'>('contained');
  color = input<'primary' | 'secondary'>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  ariaLabel = input<string>('');
}
