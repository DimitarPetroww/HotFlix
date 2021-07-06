import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/([A-Za-z0-9][A-Za-z0-9]?|[A-Za-z0-9][\w._-]*\w)@(([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z])\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))(\.([A-Za-z][A-Za-z]*|[A-Za-z][A-Za-z-]*[A-Za-z]))*/gm)]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      repeatPassword: ["", []]
    }, { validators: [ConfirmedValidator("password", "repeatPassword")]})
  }

  submitHandler() {
    this.userService.register(this.form.value).subscribe({
      next: (x) => console.log(x),
      error: (error) => console.log(error.message)
    })
  }
}