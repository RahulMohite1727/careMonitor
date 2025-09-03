import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

describe('AuthService', () => {
  let svc: AuthService;
  let http: HttpTestingController;
  let tokens: jasmine.SpyObj<TokenService>;

  beforeEach(() => {
    tokens = jasmine.createSpyObj('TokenService', ['set']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: TokenService, useValue: tokens }]
    });
    svc = TestBed.inject(AuthService);
    http = TestBed.inject(HttpTestingController);
  });

  it('stores token on login', () => {
    svc.login({ email: 'a@b.com', password: 'x' }).subscribe();
    const req = http.expectOne('/api/login');
    req.flush({ token: 't', user: { email: 'a@b.com' } });
    expect(tokens.set).toHaveBeenCalledWith('t', 'a@b.com');
  });
});