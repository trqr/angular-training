import { computed, inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, User } from '../../models/user.model';
import { firstValueFrom } from 'rxjs';

@Service()
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly prefix = '/auth';

  readonly token = signal<string | null>(localStorage.getItem('token'));
  readonly isLoggedIn = computed(() => this.token() !== null);

  async login(login: LoginRequest): Promise<LoginResponse> {
    const res = await firstValueFrom(this.http.post<LoginResponse>(`${this.prefix}/login`, login));
    this.token.set(res.accessToken);
    localStorage.setItem('token', res.accessToken);
    return res;
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('token');
  }

  me(): Promise<User> {
    return firstValueFrom(this.http.get<User>(`${this.prefix}/me`));
  }
}
