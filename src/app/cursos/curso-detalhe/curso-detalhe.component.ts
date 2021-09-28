import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;
  subscription!: Subscription;
  curso!: any;

  // para pegar os valores da rota ativa, é preciso injetar uma instância de ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService) {
    //console.log(this.route);
    // esta é a primeira forma de pegar os valores dos parâmetros da rota ativa
    // lembrando que os parâmetros devem ser declarados para que possam ser recebidos através
    //deste objeto.
    // esta forma de capturar os parâmetros de rota foi comentado pois é suscetível a erros
    //na observação dos parâmetros da rota ativa.
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // esta é a forma mais aconselhada de escutar os parâmetros de uma rota
    this.subscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);

      // essa verificação é quem faz a navegação imperativa (programática) para determinada rota
      // neste caso, quando a rota o parâmetro passado para a rota é inválido, é invocado
      //no router o método navigate para ir para um componente de erro (404).
      if (this.curso == null) {
        this.router.navigate(['cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    // quando o objeto for destruído, remove a escuta do objeto de rota
    this.subscription?.unsubscribe();
  }
}
