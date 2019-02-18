import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import { createEmbeddedView } from '@angular/core/src/view/view';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){

    if(!condition){

      this._viewContainerRef.createEmbeddedView(this._templateRef);

    }else{

      this._viewContainerRef.clear();
    }
  }

  constructor(

    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef


  ){ }

}
