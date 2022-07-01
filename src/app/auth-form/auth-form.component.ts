import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from './auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent
  implements OnInit, AfterContentInit, AfterViewInit
{
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  showMessage: Boolean = false;

  @ContentChild(AuthRememberComponent) remember!: AuthRememberComponent;
  @ViewChild('email') email!: ElementRef;


  constructor() {}

  ngAfterViewInit(): void {
    this.email.nativeElement.setAttribute('placeholder','enter your email address');
  }

  ngAfterContentInit() {
    if (this.remember !== undefined) {
      if (this.remember) {
        this.remember.checked.subscribe((check: Boolean) => {
          this.showMessage = check;
        });
      }
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngOnInit(): void {}
}
