import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isLoading: Boolean = false
  user: IUser

  get error(): string {
    return this.alertService.error
  }

  constructor(private userService: UserService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true
    this.userService.getUser().subscribe(x => {
      this.user = x
      this.isLoading = false
    }, err => {
      this.isLoading = false
      this.alertService.reset(err.error.message)
    })
  }
  submitHandler(fV) {
    this.isLoading = true
    Object.assign(fV, { _id: this.user._id })
    this.userService.editUser(fV).subscribe(
      x => {
        this.isLoading = false
        this.router.navigate(["/user/profile"])
      },
      err => {
        this.isLoading = false
        this.alertService.reset(err.error.message)
      })
  }

}
