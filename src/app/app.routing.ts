
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";

// Esta palavra já era reservada do JavaScript mas não estava em uso,
//agora no ES6 ela passou a ser utilizada, e significa ser final, semelhante ao
//final do Java.
const APP_ROUTES: Routes = [    // Configuração de geral de rotas da aplicação
  { path: 'cursos', component: CursosComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];

// Como este é o arquivo que contém as rotas raiz da aplicação, é usado o método forRoot().
// Esta forma não é a forma tradicional de declarar um módulo de rotas. Geralmente,
//é feito através de um módulo raiz e demais de feature.
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);