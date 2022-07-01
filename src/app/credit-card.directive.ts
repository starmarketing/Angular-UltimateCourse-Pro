import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[credit-card]',
})
export class CreditCardDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
  }

  // the host is the element we have bind on
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    // replace existing whitespace
    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');
  }
}
