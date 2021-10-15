import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // Segundo passo para o carregamento de módulo dinâmicos
    // Remover o carregamento do módulo de outros módulo, não deve ter imports para o módulo
    //com carregamento dinâmico.
    //CursosModule,
    // Segundo passo para o carregamento de módulo dinâmicos
    // Remover o carregamento do módulo de outros módulo, não deve ter imports para o módulo
    //com carregamento dinâmico.
    //AlunosModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,  // AuthGuard deve ser declarado pois é semelhante a um serviço que deve ser capaz de ser injetado
    CursosGuard, // CursosGuard também deve ser declarado em um módulo
    //AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
