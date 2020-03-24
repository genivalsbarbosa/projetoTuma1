import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from '../servico/matricula';
import { MatriculaService } from '../servico/matricula.service';
import { MatriculaCurso } from '../servico/matriculacurso';
import { Aluno } from 'src/app/aluno/servico/aluno';
import { CursoService } from 'src/app/curso/servico/curso.service';
import { Curso } from 'src/app/curso/servico/curso';
import { AlunoService } from 'src/app/aluno/servico/aluno.service';

@Component({
  selector: 'app-matricula-manter',
  templateUrl: './matricula-manter.component.html',
  styleUrls: ['./matricula-manter.component.scss']
})
export class MatriculaManterComponent implements OnInit {

  operacao: string = 'Incluir';

  matricula: Matricula = new Matricula();

  matriculaCurso: MatriculaCurso = new MatriculaCurso();

  listaCurso: Curso[] = [];
  listaAluno: Aluno[] = [];

  constructor(    
    private router: Router,
    private matriculaService: MatriculaService,
    private cursoService: CursoService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void { 
    
    this.alunoService.consultar('').subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
      }
    );
    
    this.cursoService.pesquisar('').subscribe(
      data => {
        this.listaCurso = <Curso[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/matricula']);
  }

  incluir(){
    this.matriculaService.incluir(this.matricula).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/matricula']);        
      }
    );
  }
  
  adicionar(){

    this.matricula.listaMatriculaCurso.push(this.matriculaCurso);
    this.matriculaCurso = new MatriculaCurso();

  }

  removercurso(matriculaCurso){

    this.matricula.listaMatriculaCurso = this.matricula.listaMatriculaCurso.filter(obj => obj !== matriculaCurso);

  } 

}
