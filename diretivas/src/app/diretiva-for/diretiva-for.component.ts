import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-for',
  templateUrl: './diretiva-for.component.html',
  styleUrls: ['./diretiva-for.component.css']
})
export class DiretivaForComponent implements OnInit {

  cursos: string[] = ["Angular","Java","PHP"]

  constructor() { }

  ngOnInit() {

    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
      
    }

  }

}
