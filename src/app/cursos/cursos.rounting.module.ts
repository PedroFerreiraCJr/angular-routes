import { CursosComponent } from './cursos.component';
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes = [
  // Terceiro passo para configurar o carregamento dinâmico de módulos do Angular,
  //é declarar um path vazio no routing do módulo que está sendo carregado, pois o path
  //raiz já foi declarado no primeiro passo.
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }