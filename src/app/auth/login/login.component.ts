import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:false
})
export class LoginComponent {

  constructor(private readonly fb: UntypedFormBuilder,
    private readonly auth:AuthService,
    private router:Router
  ) { }


  loading = false;
  error = '';

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true; this.error = '';
    this.auth.login(this.form.value as any).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (e:any) => { this.error = e?.statusText || 'Login failed'; this.loading = false; },
      complete: () => this.loading = false
    });
  }

}
