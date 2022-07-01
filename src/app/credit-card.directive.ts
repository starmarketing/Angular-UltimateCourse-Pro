import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[credit-card]',
})
export class CreditCardDirective {
  constructor(private elementRef: ElementRef) {
    console.log(elementRef);
  }

  // If class is required then use this:
  // @HostBinding('class') classes = 'a b c'; 

  @HostBinding('style.border')
  border!: string;

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

    // This line adds a space after 4 characters
    input.value = numbers.join(' ');
    this.border = '';

    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }
}
