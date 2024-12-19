import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials!: FormGroup;
  email!: string;
  password!: string
  loginError: boolean = false;
  constructor(private authService: AuthService, private router: Router ) {}

  ngOnInit() {
    this.credentials = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  async loginUser(data: any) {
    this.email = data.email;
    this.password = data.password;
    this.authService.login(this.email, this.password).then((result) => {
      if (result) {
        this.router.navigateByUrl('/');
        this.loginError = false;
      } else {
        this.loginError = true;
      }
    });
  }

  async loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
