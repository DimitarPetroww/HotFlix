import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form: FormGroup
  error: string

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      repeatPassword: ["", [Validators.required]]
    }, { validators: [ConfirmedValidator("password", "repeatPassword")]})
  }

  submitHandler(): void {
    this.userService.register(this.form.value).subscribe({
      next: (x) => {
        this.router.navigate(["/browse"])
      },
      error: (error) => this.error = error.message
    })
  }
}