import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {

    titulo: "JavaScript o guia definitivo",
    rating: 4.54321,
    numeroPaginas: 1080,
    preco: 152.59,
    dataLancamento: new Date(2012, 5, 23),
    url: "http://a.co/d/2EsBnFT"
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addCurso(valor) {

    this.livros.push(valor);
  }

  obterCursos() {

    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'Valor assíncrono 2'));

  constructor() { }

  ngOnInit() {
  }

}
