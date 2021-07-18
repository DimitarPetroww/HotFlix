import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser
  isLoading: Boolean = false

  get error(): string {
    return this.alertService.error
  }
  
  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.userService.getUser().subscribe(
      x => {
        this.isLoading = false
        this.user = x
      },
      err => {
        this.isLoading = false
        this.alertService.reset(err.error.message)
      })
  }

}
