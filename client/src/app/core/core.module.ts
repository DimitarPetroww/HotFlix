import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from '../user/user-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    SideNavComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserRoutingModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
  ]
})
export class CoreModule { }
