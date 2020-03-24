import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Matricula } from './matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  constructor(
    private http: HttpClient
  ) { }

  consultar(codigoAluno: string){        
    return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/consultar/"+codigoAluno);
  }

  incluir(matricula: Matricula){        
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/incluir", matricula);
  }

  remover(matricula: Matricula){      
    return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/matricula/remover", matricula);    
  }

}
