import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id!: string;

  // para pegar os valores da rota ativa, é preciso injetar uma instância de ActivatedRoute
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
    // esta é a primeira forma de pegar os valores dos parâmetros da rota ativa
    // lembrando que os parâmetros devem ser declarados para que possam ser recebidos através
    //deste objeto.
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }
}
