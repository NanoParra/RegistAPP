import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  username: string;

  constructor(private router: Router) { }

  resetPassword() {
    alert('Instrucciones enviadas a ' + this.username);
    this.router.navigate(['/login']);
  }
}
