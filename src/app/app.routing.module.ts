import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./guards/auth.guard";

// Esta palavra já era reservada do JavaScript mas não estava em uso,
//agora no ES6 ela passou a ser utilizada, e significa ser final, semelhante ao
//final do Java.
const appRoutes: Routes = [
  // Este é o primeiro passo para utilizar o lazy-loading de modulos do Angular.
  // Declarar o módulo que será carregado dinâmicamente da seguinte forma, com a declaração de import e
  //a claúsula then da promise.
  { path: 'cursos',
    loadChildren: () => import(`./cursos/cursos.module`).then(m => m.CursosModule),
    canActivate: [AuthGuard]    // guarda de rota de ativação para esta rota
  },
  { path: 'alunos',
    loadChildren: () => import(`./alunos/alunos.module`).then(m => m.AlunosModule),
    canActivate: [AuthGuard]    // guarda de rota de ativação para esta rota
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent,
    canActivate: [AuthGuard]    // guarda de rota de ativação para esta rota
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }