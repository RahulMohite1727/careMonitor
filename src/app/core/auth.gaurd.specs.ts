import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { TokenService } from './token.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  it('redirects to /login if not authed', () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        AuthGuard,
        { provide: TokenService, useValue: { isAuthenticated: () => false } }
      ],
    });
    const guard = TestBed.inject(AuthGuard);
    const router = TestBed.inject(Router);
    const urlTree = guard.canActivate() as any;
    expect(router.serializeUrl(urlTree)).toBe('/login');
  });
});
