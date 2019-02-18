import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [CursosComponent, CursosDetalheComponent],
  imports: [
    CommonModule
  ],
  exports: [ //quias as declaraçoes que queremos expor a outos módulos
    CursosComponent
  ],
  providers:[
    CursosService
  ]
})
export class CursosModule { }
