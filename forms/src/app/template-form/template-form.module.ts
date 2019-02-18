import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TemplateFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule
    
  ]
})
export class TemplateFormModule { }
