import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LayoutComponent } from './layout/layout.component';
import { CursoService } from './curso/servico/curso.service';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoManterComponent } from './aluno/aluno-manter/aluno-manter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    AlunoComponent,
    LayoutComponent,
    CursomanterComponent,
    AlunoManterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CursoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
