import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = userService.isLoggedIn();
  if (!isLoggedIn) router.navigate(['/login']);
  return isLoggedIn;
};
