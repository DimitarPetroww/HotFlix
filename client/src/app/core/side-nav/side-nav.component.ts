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
  get isLogged(): boolean {
    return this.userService.isLogged
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  logout(event): void {
    event.preventDefault()
    this.userService.logout().subscribe({
      next: () => {
        this.sidenavClose.emit();
        this.router.navigate(["/"])
      },
      error: (error: Error) => console.log(error.message)
    })  
  }
}
