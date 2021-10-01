import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu: boolean = false;

  constructor(
    // AuthService tem escopo global, pois foi declarado no módulo raiz do app
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe((value) => {
      this.mostrarMenu = value;
    });
  }
}
