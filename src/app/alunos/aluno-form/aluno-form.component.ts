import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  alunoCopy: any;
  changed: boolean = false;
  subscription!: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly alunosService: AlunosService) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];

      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }

      this.alunoCopy = Object.assign({}, this.aluno);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onChange(event: any, attr: string): void {
    const atual = event?.target?.value;
    console.log(atual);
    if (this.alunoCopy[attr] != atual) {
      this.changed = true;
      console.log('form alterado');
    }
  }

  public podeAlterarRota(): boolean {
    if (this.changed) {
      return confirm('Houve alterações no form. Deseja sair da página?');
    }

    return true;
  }
}
