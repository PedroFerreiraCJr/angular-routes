import { NgModule } from "@angular/core";

import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { LoginComponent } from './login/login.component';
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { HomeComponent } from "./home/home.component";

// Esta palavra já era reservada do JavaScript mas não estava em uso,
//agora no ES6 ela passou a ser utilizada, e significa ser final, semelhante ao
//final do Java.
const appRoutes: Routes = [    // Configuração geral de rotas da aplicação
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }