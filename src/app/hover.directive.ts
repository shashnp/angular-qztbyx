// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appHover]'
// })
// export class HoverDirective {

//   constructor() { }

// }

import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  OnInit,
  HostListener,
  HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HoverDirective {

  constructor(
    private elementRef:ElementRef, 
    private renderer:Renderer2) { }
    
    ngOnInit(){
      this.color = this.defaultColor;
    }


    @Input() defaultColor;
    @Input() highlight: string= 'lime';

    @HostBinding('style.color') color:string = this.defaultColor;


    @HostListener('mouseenter') mouseover(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

      this.color=this.highlight;
    }

    @HostListener('mouseleave') mouseleave(){
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
      this.color=this.defaultColor;
    }

}