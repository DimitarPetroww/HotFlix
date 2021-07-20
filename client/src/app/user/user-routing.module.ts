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
            isLogged: false
        }
    },
    {
        path: "register",
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: false
        }
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        }
    },
    {
        path: "edit",
        component: EditComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
