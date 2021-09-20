import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos!: any[];
  pagina!: number;
  subscription!: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.pagina = params['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public proximaPagina(): void {
    this.pagina++;
    // a passagem de parâmetros de query para a navegação programática
    //é através de um objeto de configuração, como neste exemplo.
    // o atributo queryParams é obrigatório, o atributo página é o valor passado
    // para a rota.
    this.router.navigate(['/cursos'], { queryParams: { pagina: this.pagina } });
  }
}
