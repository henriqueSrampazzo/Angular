import { NgModule } from '@angular/core';
import { RouterModule, CanActivateChild } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate-guard';
import { resolve } from 'url';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
    {
        path: '', component: AlunosComponent, CanActivateChild: [AlunosGuard], children: [ //define rotas filhas
            { path: 'novo', component: AlunoFormComponent }, //hard-code vem antes das strings relativas, evita colisão de rotas
            {
                path: ':id', component: AlunoDetalheComponent,

                resolve: { aluno: AlunoDetalheResolver }
            },
            {
                path: ':id/editar', component: AlunoFormComponent,

                canDeactivate: [AlunosDeactivateGuard],
            }
        ]
    }
];

@NgModule({

    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]

})

export class AlunosRoutingModule { }