import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public regex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private userService: UserService, private router: Router) { }

  submitHandler(fV: Object): void {
    this.userService.login(fV).subscribe({
      next: (x) => {
        this.router.navigate(["/browse"])
      },
      error: (error: Error) => console.log(error.message)
    })
  }

}
