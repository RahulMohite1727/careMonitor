import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { TokenService } from 'src/app/core/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone:false
})
export class DashboardComponent {

  constructor( private tokens: TokenService,
  private auth :AuthService,
  private router: Router){

  }
  email = this.tokens.userEmail();

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
