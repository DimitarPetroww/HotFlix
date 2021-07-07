import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  get isLogged(): boolean {
    return this.userService.isLogged
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  logout(event): void {
    event.preventDefault()
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(["/"])
      },
      error: (error: Error) => console.log(error.message)
    })  
  }
}
