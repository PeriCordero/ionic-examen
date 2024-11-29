import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor() {}

  register() {
    if (this.password === this.confirmPassword) {
      console.log('Formulario enviado con éxito:', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      // Aquí puedes añadir lógica para enviar los datos al backend o realizar otras acciones
    } else {
      console.error('Las contraseñas no coinciden');
    }
  }
}
