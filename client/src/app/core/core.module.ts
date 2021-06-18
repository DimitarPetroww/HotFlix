import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from '../user/user-routing.module';
import { DetailsComponent } from './details/details.component';
import { WatchComponent } from './watch/watch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SideNavComponent,
    DetailsComponent,
    WatchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
  ]
})
export class CoreModule { }
