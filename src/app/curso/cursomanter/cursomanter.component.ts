import { Component, OnInit } from '@angular/core';
import { Curso } from '../servico/curso';
import { CursoService } from '../servico/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.scss']
})
export class CursomanterComponent implements OnInit {

  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  incluir(){
    this.cursoService.incluir(this.curso).subscribe(
      retorno => {        
        alert(retorno['mensagem']);
        this.voltar();
      }
    );
    
    
  }

  voltar(){
    this.router.navigate(['/curso']);
  }

}
