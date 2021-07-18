import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { ConfirmedValidator } from '../../shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup
  isLoading: boolean = false

  get error(): string {
    return this.alertService.error
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private alertService: AlertService) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      repeatPassword: ["", [Validators.required]]
    }, { validators: [ConfirmedValidator("password", "repeatPassword")] })
  }
  ngOnInit() {

  }
  submitHandler(): void {
    this.isLoading = true
    this.userService.register(this.form.value).subscribe(
      res => {
      this.isLoading = false
      this.router.navigate(["/browse"])
      },
      err => {
        this.isLoading = false
        this.alertService.reset(err.error.message)
      }
    )
  }
}