import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './movie/details/details.component';
import { BrowseComponent } from './core/browse/browse.component';
import { HomeComponent } from './core/home/home.component';
import { CreateComponent } from './movie/create/create.component';
import { EditComponent } from './movie/edit/edit.component';

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
  },
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "edit/:id",
    component: EditComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
