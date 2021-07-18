import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthChildGuard } from '../shared/auth-child.guard';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: "user",
        canActivateChild: [AuthChildGuard],
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
