import { NgModule} from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [

  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetalheComponent }

];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)], //relativo ao forRoot 
  exports: [RouterModule]
})
export class CursosRoutingModule { } 
