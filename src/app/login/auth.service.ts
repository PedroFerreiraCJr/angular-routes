import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './model/usuario';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  public readonly mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router
  ) { }

  public login(usuario: Usuario): void {
    if (usuario.nome === 'pedro@gmail.com' &&
        usuario.senha === '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
      return;
    }

    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(true);
  }

  // método que informa se o usuário está logado ou não
  public isUsuarioAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}
