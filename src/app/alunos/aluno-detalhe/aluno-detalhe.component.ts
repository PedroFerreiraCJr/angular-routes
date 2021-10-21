import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno;
  subscription!: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    /*
    // o carregamento do aluno foi trocado para um guard resolve configurado no alunos.routing.module.ts
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];

      this.aluno = this.alunosService.getAluno(id);
    });
    */

    this.subscription = this.route.data.subscribe((data) => {
      this.aluno = data.aluno;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public editarAluno(): void {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }
}
