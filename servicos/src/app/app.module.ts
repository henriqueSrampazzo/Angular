import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';
import { CursosModule } from './cursos/cursos.module';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  //providers: [CursosService], // declaração de serviços
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
