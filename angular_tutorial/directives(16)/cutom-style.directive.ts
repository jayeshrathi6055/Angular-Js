// Take ElementRef from import line
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCutomStyle]'
})
export class CutomStyleDirective {
// Now create private element
  constructor(private el:ElementRef) {
    el.nativeElement.style.color = "red"
   }

}
