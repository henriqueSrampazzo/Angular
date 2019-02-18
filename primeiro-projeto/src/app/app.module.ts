import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ // listar todos os componentes/diretivas.pipes que vamos utilizar
    AppComponent,
    MeuPrimeiro2Component
  ],
  imports: [ // otros módulos
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // serviços de escopo global
  bootstrap: [AppComponent] //serve como container
})
export class AppModule { } //módulo raiz da aplicação
