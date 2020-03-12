import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/curso';
import { CursoService } from './servico/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {


  curso: Curso = new Curso();

  constructor(
    private cursoServico: CursoService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(){

    this.cursoServico.pesquisar(this.curso.nome).subscribe(
      retorno => {
        console.log(retorno);
      }

    );

  }

}
