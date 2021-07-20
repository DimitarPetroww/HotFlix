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
import { AlertService } from '../services/alert.service';
import { MovieRoutingModule } from '../movie/movie-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { OwnerGuard } from './owner.guard';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    HeaderComponent,
    BrowseComponent,
    SideNavComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingModule,
    MovieRoutingModule,
    SharedModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    NotFoundComponent
  ],
  providers: [UserService, AlertService, OwnerGuard, AuthGuard]
})
export class CoreModule { }
