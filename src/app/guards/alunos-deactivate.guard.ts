import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { FormCanDeactivate } from './form-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<FormCanDeactivate> {

  constructor() { }
  canDeactivate(component: FormCanDeactivate, route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot, nextState?: RouterStateSnapshot)
      :boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guarda de desativação');
    //return component.podeAlterarRota();
    return component.podeDesativar();
  }
}
