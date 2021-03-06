import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  isLogged$ = this.userService.isLogged$ 

  constructor(private userService: UserService, private router: Router) { }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  logout(event): void {
    event.preventDefault()
    this.userService.logout().subscribe(res => {
      this.router.navigate(["/"])
    })
  }
}
