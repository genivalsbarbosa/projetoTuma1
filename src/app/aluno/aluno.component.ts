import { Component, OnInit } from '@angular/core';
import { Aluno } from './servico/aluno';
import { Router } from '@angular/router';
import { AlunoService } from './servico/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  selecionado: Aluno;

  listaAluno: Aluno[] = [];
  
  constructor(
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {


    this.alunoService.consultar(this.aluno.nome).subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
        
      }
    );
  }

  pesquisar(){
    this.alunoService.consultar(this.aluno.nome).subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
        
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/aluno/incluir']);
  }

  alterar(){    
    this.router.navigate(['/aluno/alterar/'+this.selecionado.nome]);
  }

  remover(){

    this.alunoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(valor){
    this.selecionado = valor;    
  }

}
