import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor() { }
@HostBinding('style.backgroundColor') color = "grey";
@HostListener('click') onclick(){
  this.color = 'red'
}
}
