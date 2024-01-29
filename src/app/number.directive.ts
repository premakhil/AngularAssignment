import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]',

})
export class NumberDirective {

  constructor() { }
  @HostListener('keydown',['$event'])
  onKeyDown(event: KeyboardEvent){
    if(isNaN(Number(event.key)) && (event.key !== 'Backspace')){
      event.preventDefault();
    }
  }

}
