import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  private tokens = inject(TokenService);
  private router = inject(Router);

  canActivate(): boolean | UrlTree {
    return this.tokens.isAuthenticated()
      ? true
      : this.router.parseUrl('/login');
  }
}
