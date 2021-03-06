import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { BrowseComponent } from './core/browse/browse.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: false,
      redirectUrl: "/browse"
    }
  },
  {
    path: "browse",
    component: BrowseComponent,
    canActivate: [AuthGuard],
    data: {
      isLogged: true,
      redirectUrl: "/user/login"
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
  {
    path: "**",
    redirectTo: "/404"
  },
  {
    path: "404",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
