import { AlunoDetalheComponent } from './../aluno-detalhe/aluno-detalhe.component';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(
    private alunosService: AlunosService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Aluno | Observable<Aluno> | Promise<Aluno> {
    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }
}
