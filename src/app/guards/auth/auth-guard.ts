import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

const isLoggedIn = false;

export const authGuard: CanActivateFn = (route, state) => {
  return isLoggedIn ? true : inject(Router).parseUrl('/login');
};
