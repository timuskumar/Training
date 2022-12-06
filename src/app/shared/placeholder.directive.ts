import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
  /* @Input() 
  set appPlaceholder(value: boolean) {
    if(value) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else {
      this.viewContainerRef.clear();
    }
  } */

  /* constructor(private eleRef: ElementRef) { }
  @HostListener('mouseover') changeBackground() {
    this.eleRef.nativeElement.style.backgroundColor = 'red';
  } */

  constructor(public viewContainerRef: ViewContainerRef) {

  }

}
