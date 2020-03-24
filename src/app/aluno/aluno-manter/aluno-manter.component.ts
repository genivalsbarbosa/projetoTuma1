import { Component, OnInit } from '@angular/core';
import { Aluno } from '../servico/aluno';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from '../servico/aluno.service';

@Component({
  selector: 'app-aluno-manter',
  templateUrl: './aluno-manter.component.html',
  styleUrls: ['./aluno-manter.component.scss']
})
export class AlunoManterComponent implements OnInit {

  nomeAluno: string = '';
  operacao: string = 'Incluir';

  aluno: Aluno = new Aluno();

  constructor(
    private routeActivated: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.nomeAluno = this.routeActivated.snapshot.params.id;
    if(this.nomeAluno != null){
      this.operacao = 'Alterar';
      this.alunoService.consultar(this.nomeAluno).subscribe(
        data => {
          this.aluno = (<Aluno[]>data)[0];
        }
      );
    }
  }

  voltar(){
    this.router.navigate(['/aluno']);
  }

  incluir(){
    this.alunoService.incluir(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);        
      }
    );
  }

  alterar(){
    this.alunoService.alterar(this.aluno).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/aluno']);        
      }
    );
  }

}
