import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  error: string
  constructor(private userService: UserService, private router: Router) { }

  submitHandler(fV: Object): void {
    this.userService.login(fV).subscribe(
      res=> this.router.navigate(["/browse"]),
      err => {
        timer(4000).subscribe(_ => this.error = undefined)
        this.error = err.error.message
      }
    )
  }

}
