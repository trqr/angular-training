import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { UserProfile } from '../../components/user-profile/user-profile';

@Component({
  imports: [UserProfile],
  selector: 'app-account',
  styleUrl: './account.css',
  templateUrl: './account.html',
})
export class Account {
  user = signal<User | null>(null);
  authService = inject(AuthService);

  async ngOnInit() {
    this.user.set(await this.authService.me());
  }
}
