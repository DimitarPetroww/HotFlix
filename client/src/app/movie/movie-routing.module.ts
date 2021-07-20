import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { OwnerGuard } from '../core/owner.guard';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/404"
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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }