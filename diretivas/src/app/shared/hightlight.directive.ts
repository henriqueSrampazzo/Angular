import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter') onmouseover() {

    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') onmouseLeave() {

    this.backgroundColor = this.defaultColors;
  }

  @HostBinding('style.backgroundColor') backgroundColor:string ;


  @Input() defaultColors: string = 'white';
  @Input('hightlight') hightlightColor: string = 'yellow';

  constructor() {}

  ngOnInit(){

    this.backgroundColor = this.defaultColors;
  }

}
