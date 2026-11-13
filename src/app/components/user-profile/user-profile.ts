import { Component, input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { User } from '../../models/user.model';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-user-profile',
  styleUrl: './user-profile.css',
  templateUrl: './user-profile.html',
})
export class UserProfile {
  user = input.required<User>();
}
