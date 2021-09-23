import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' },
  ];

  constructor() { }

  public getAlunos() {
    return this.alunos;
  }

  public getAluno(id: string): any {
    let alunos = this.getAlunos();
    for (let i=0; i<alunos.length; i++) {
      const aluno = alunos[i];
      if (aluno?.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
