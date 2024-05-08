import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const checkAuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isTokenExpired()) {
    router.navigate(['/sign-in']);
    return false;
  }
  return true;
};
