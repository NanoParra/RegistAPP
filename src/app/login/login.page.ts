import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public username: string = '';
  public password: string = '';

  constructor(private router: Router) { }
  

  login() {
    if (this.username === 'usuario' && this.password === '1234') {
      this.router.navigate(['/home'], { queryParams: { username: this.username } });
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
