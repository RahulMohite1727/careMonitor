import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'auth_token';
const USER_EMAIL = 'user_email';

@Injectable({ providedIn: 'root' })
export class TokenService {
  constructor(private cookies:CookieService){
  }

  set(token: string, email: string) {

    this.cookies.set(TOKEN_KEY, token, { sameSite: 'Lax', path: '/' });
    this.cookies.set(USER_EMAIL, email, { sameSite: 'Lax', path: '/' });
  }
  get(): string | null {
    const value = this.cookies.get(TOKEN_KEY);
    return value || null;
  }
  userEmail(): string | null {
    const value = this.cookies.get(USER_EMAIL);
    return value || null;
  }
  clear() {
    this.cookies.delete(TOKEN_KEY, '/');
    this.cookies.delete(USER_EMAIL, '/');
  }
  isAuthenticated(): boolean {
    return !!this.get();
  }
}
