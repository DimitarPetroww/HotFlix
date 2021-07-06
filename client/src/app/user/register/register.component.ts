import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/([A-Za-z0-9][A-Za-z0-9]?|[A-Za-z0-9][\w._-]*\w)@(([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z])\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))(\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))*/gm)]],
      username: ["", [Validators.required]],
      passwords: this.fb.group({
        password: ["", [Validators.required]],
        repeatPassword: ["", []]
      }, { validator: ConfirmPasswordValidator("password", "repeatPassword") })
    })
  }



}
