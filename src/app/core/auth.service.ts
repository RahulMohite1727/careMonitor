import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

export interface LoginBody { email: string; password: string; }
export interface LoginResponse { token: string; user: { email: string }; }

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private tokens = inject(TokenService);

  login(body: LoginBody): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/login', body).pipe(
      tap(res => this.tokens.set(res.token, res.user.email))
    );
  }
  logout() { this.tokens.clear(); }
}