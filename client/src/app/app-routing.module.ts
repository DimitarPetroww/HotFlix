import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './core/details/details.component';
import { BrowseComponent } from './core/browse/browse.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "browse",
    component: BrowseComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
