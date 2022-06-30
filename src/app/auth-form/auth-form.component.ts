import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, AfterContentInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  showMessage: Boolean = false;

  @ContentChild(AuthRememberComponent) remember!: AuthRememberComponent;

  constructor() {}

  ngAfterContentInit() {
    if(this.remember !== undefined) {
      if(this.remember) {
        this.remember.checked.subscribe((check: Boolean) => {
          this.showMessage = check;
        })
      }
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngOnInit(): void {}
}
