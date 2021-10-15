import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from "../guards/alunos.guard";

const alunosRoutes: Routes = [
  // A declaração deste path precisa ser em branco, pois o path principal deste módulo já
  //foi declarado no módulo raiz do app, com o carregamento dinâmico.
  { path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],  // desta forma, este guard só será chamado para as rotas filhas declaradas abaixo
    children: [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent },
    { path: ':id/editar', component: AlunoFormComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
