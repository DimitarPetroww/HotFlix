import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ngbd-carousel-navigation',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  constructor(private userService: UserService, private router: Router) {

  }
  ngOnInit() {
    if(this.userService.isLogged) {
      this.router.navigate(["/browse"])
    }
  }

}