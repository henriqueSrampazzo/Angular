import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css'] //quando o CSS foi maior que um estilo
  styles: [` 
  
  .hightlight{

    background-color: yellow;
    font-weight: bold;
   }
  `]//quando o CSS estiver com apenas um estilo 
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://35.237.88.55';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular'; 

  valorInicial: number = 15;

  getValor() {

    return 1;
  }

  getCurtirCurso() {

    return true;
  }

  botaoClicado() {

    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {

    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor) {

    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){

    console.log(evento.novoValor);
    


  }

  constructor() { }

  ngOnInit() {
  }

}
