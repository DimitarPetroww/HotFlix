import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './core/browse/browse.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';


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
    path: "user",
    loadChildren: () => import("./user/user.module").then(m=> m.UserModule)
  },
  {
    path: "movies",
    loadChildren: () => import("./movie/movie.module").then(m=> m.MovieModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
