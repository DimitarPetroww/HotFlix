import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  isLoading: Boolean = false

  get error(): string {
    return this.alertService.error
  }
  constructor(private userService: UserService, private router: Router, private alertService: AlertService) { }

  submitHandler(fV: Object): void {
    this.isLoading = true
    this.userService.login(fV).subscribe(
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
