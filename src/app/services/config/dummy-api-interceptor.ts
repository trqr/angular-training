import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../../environments/environment';

export const dummyApiInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();
  const url = `${environment.dummyApiBaseUrl}${req.url}`

  const headers = token ? { Authorization: `Bearer ${token}` } : { Authorization: '' };

  return next(req.clone({ url, setHeaders: headers }));
};
