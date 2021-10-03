import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

/**
 * Esta classe foi criada para fazer a verificação de usuário autenticado no sistema antes
 * que o mesmo possa acessar determinadas rotas.
 */
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
