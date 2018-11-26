import {Directive, 
        HostListener, 
        HostBinding, 
        ElementRef, 
        EventEmitter,
        Output, 
        ViewChild,
        Injectable,
        Renderer2} from '@angular/core';


@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})

export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2){};
  
  @HostBinding('class.show') isShow = false;
  // @HostListener('click') onclick(){
  //   this.isOpen = !this.isOpen
  // }
  
  @HostListener('document:click', ['$event.target']) onClick(event) {
        const clickedInside = this.elementRef.nativeElement.contains(event);
        
        if (clickedInside) {
          this.isShow = !this.isShow
        }
        else {
          
          this.isShow = false
        }
        // this.isShow=!this.isShow
        // console.log(event, 'targetElement')
        // console.log(this.elementRef.nativeElement)
        // console.log(clickedInside)
        
        
    }
}
