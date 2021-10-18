import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

  constructor() { }
  canDeactivate(component: AlunoFormComponent, route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, nextState?: RouterStateSnapshot)
      :boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarda de desativação');
    return component.podeAlterarRota();
  }
}
