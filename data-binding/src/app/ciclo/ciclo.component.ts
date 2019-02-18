import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {

    this.log('constructor');
  }

  ngOnChanges() {

    this.log('ngOnChanges');
  }

  ngOnInit() {

    this.log('ngOnInit');
  }

  ngDoCheck() {

    this.log('ngDoCheck');
  }

  ngAfterContentChecked() {

    this.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {

    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {

    this.log('ngAfterViewInit');
  }

  ngAfterChecked() {

    this.log('ngAfterChecked');
  }

  ngAfterViewChecked() {

    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {

    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);

  }

}
