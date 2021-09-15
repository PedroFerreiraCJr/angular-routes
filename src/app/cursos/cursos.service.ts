import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  public getCursos(): any[] {
    return [
      { id: '1', nome: 'Angular 2' },
      { id: '2', nome: 'Java 8' }
    ];
  }

  public getCurso(id: string): any {
    let cursos = this.getCursos();
    for (let i=0; i<cursos.length; i++) {
      const curso = cursos[i];
      if (curso?.id == id) {
        return curso;
      }
    }
    return null;
  }
}
