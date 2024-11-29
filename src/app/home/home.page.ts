import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auths/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      //Se aprovecha el state para llevar el username al inicio
      this.router.navigate(['/inicio'], { state: { username: this.username}});
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

}
