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
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
