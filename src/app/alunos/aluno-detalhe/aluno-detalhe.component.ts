import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  subscription!: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly alunosService: AlunosService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];

      this.aluno = this.alunosService.getAluno(id);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public editarAluno(): void {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }
}
