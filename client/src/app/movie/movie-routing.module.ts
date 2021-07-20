import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { OwnerGuard } from '../core/owner.guard';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: "movies",
        canActivateChild: [AuthGuard],
        children: [
            {
                path: "details/:id",
                component: DetailsComponent,
                data: {
                    isLogged: true
                }
            },
            {
                path: "create",
                component: CreateComponent,
                data: {
                    isLogged: true
                }
            },
        ]
    },
    {
        path: "movies/edit/:id",
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