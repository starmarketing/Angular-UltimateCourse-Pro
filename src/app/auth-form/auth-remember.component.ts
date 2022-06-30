import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'auth-remember',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event)" />
      Remember Me
    </label>
  `,
})
export class AuthRememberComponent implements OnInit {
  @Output() checked: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  onChecked(value: any) {
    this.checked.emit(value.target.checked);
  }

  constructor() {}

  ngOnInit(): void {}
}
