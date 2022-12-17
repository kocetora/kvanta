import { Component, EventEmitter, Output } from '@angular/core';
import {
  Validators,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
// import { noWhitespace } from '../../shared/validators/noWhitespace';
// import { IUser } from '../../shared/interfaces/user';

interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.less'],
})
export class AuthFormComponent {
  public form: UntypedFormGroup;

  @Output() onsubmit: EventEmitter<IUser> = new EventEmitter<IUser>();

  constructor(private formBuilder: UntypedFormBuilder) {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(225),
          // noWhitespace,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(225),
          // noWhitespace,
        ],
      ],
    });
  }

  submit() {
    if (this.form.valid) {
      const user: IUser = { ...this.form.value };
      this.onsubmit.emit(user);
    }
  }
}
