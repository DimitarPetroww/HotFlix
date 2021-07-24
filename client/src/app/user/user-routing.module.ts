import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/404"
    },
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
            redirectUrl: "/browse"
        }
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false,
            redirectUrl: "/browse"
        }
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true,
            redirectUrl: "/user/login"
        }
    },
    {
        path: "edit",
        component: EditComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true,
            redirectUrl: "/user/login"
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
