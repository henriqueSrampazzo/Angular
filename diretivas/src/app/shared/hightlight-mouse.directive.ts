import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[hightlightMouse]'
})
export class HightlightMouseDirective {

  @HostListener('mouseenter') onmouseover(){

    // this._renderer.setElementStyle(this._elementRef.nativeElement,'backgroud-color','yellow');
    this.backgroundColor = 'yellow';
  }


  @HostListener('mouseleave') onmouseLeave(){

    // this._renderer.setElementStyle(this._elementRef.nativeElement,'backgroud-color','red');
    this.backgroundColor = 'white';

  }

  // @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){

    return this.backgroundColor;
  }
  private backgroundColor: string;


  constructor(
    //private _elementRef: ElementRef, 
   // private _renderer: Renderer 
   ){ 

    }
}
