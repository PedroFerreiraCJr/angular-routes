import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;
  subscription!: Subscription;

  // para pegar os valores da rota ativa, é preciso injetar uma instância de ActivatedRoute
  constructor(private route: ActivatedRoute) {
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
    });
  }

  ngOnDestroy(): void {
    // quando o objeto for destruído, remove a escuta do objeto de rota
    this.subscription?.unsubscribe();
  }
}
