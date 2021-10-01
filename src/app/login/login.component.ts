import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario('', '');

  constructor(
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.login(this.usuario);
  }
}
