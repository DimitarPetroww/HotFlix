import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './movie/details/details.component';
import { BrowseComponent } from './core/browse/browse.component';
import { HomeComponent } from './core/home/home.component';
import { CreateComponent } from './movie/create/create.component';
import { EditComponent } from './movie/edit/edit.component';
import { AuthGuard } from './shared/auth.guard';
import { OwnerGuard } from './shared/owner.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "browse",
    component: BrowseComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true
    }
  },
  {
    path: "edit/:id",
    component: EditComponent,
    canActivate: [OwnerGuard],
    data: {
      isLogged: true
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
