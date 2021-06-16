import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './core/details/details.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/browse"
  },
  {
    path: "browse",
    component: HomeComponent
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
