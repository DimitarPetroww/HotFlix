import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  isLogged$ = this.userService.isLogged$ 

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  logout(event): void {
    event.preventDefault()
    this.userService.logout().subscribe(() => {
      this.sidenavClose.emit();
      this.router.navigate(["/"])
    })
  }
}
