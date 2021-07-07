import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
