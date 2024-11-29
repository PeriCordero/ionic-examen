import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Estado de autenticación

  login(username: string, password: string): boolean {
    // Permite cualquier usuario y contraseña
    this.isAuthenticated = true;
    console.log(`Usuario: ${username}, Contraseña: ${password}`); // Opcional: registro para depuración
    return true;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    console.log('Sesión cerrada.');
  }
}
