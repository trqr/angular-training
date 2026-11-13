import { Component, inject, signal } from '@angular/core';
import { Button } from '../../components/button/button';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { emptyLoginRequest, LoginRequest } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  imports: [Button, FormRoot, JsonPipe, FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  user = signal<LoginRequest>(emptyLoginRequest);
  authService = inject(AuthService);
  router = inject(Router);

  userForm = form(
    this.user,
    (path) => {
      required(path.username, { message: 'Username est obligatoire' });
      minLength(path.username, 3, { message: 'Le username doit contenir au moins 3 caractères' });
      required(path.password, { message: 'Le mot de passe est obligatoire' });
      minLength(path.password, 8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères',
      });
    },
    {
      submission: {
        action: async () => {
          try {
            await new Promise<void>((resolve) => setTimeout(resolve, 500));
            await this.authService.login(this.user());
            this.userForm().reset(emptyLoginRequest);
            await new Promise<void>((resolve) => setTimeout(resolve, 1000));
            await this.router.navigateByUrl('account');
          } catch (error: any) {
            return {
              kind: 'server',
              message: error.error.message,
            };
          } finally {

          }
          return;
        },
      },
    },
  );
}
