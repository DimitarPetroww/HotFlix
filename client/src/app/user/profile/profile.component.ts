import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser
  isLoading: Boolean = false
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.userService.getUser().subscribe(x=> {
      this.isLoading = false
      this.user = x
    })
  }

}
