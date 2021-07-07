import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BrowseComponent } from './browse/browse.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from '../user/user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    HeaderComponent,
    BrowseComponent,
    SideNavComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
  ],
  providers: [UserService]
})
export class CoreModule { }
