import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "user",
        canActivateChild: [AuthGuard],
        children: [
            {
                path: "login",
                component: LoginComponent,
                data: {
                    isLogged: false
                }
            },
            {
                path: "register",
                component: RegisterComponent,
                data: {
                    isLogged: false
                }
            },
            {
                path: "profile",
                component: ProfileComponent,
                data: {
                    isLogged: true
                }
            },
            {
                path: "edit",
                component: EditComponent,
                data: {
                    isLogged: true
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
