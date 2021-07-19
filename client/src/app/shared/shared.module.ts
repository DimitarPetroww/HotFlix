import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserService } from '../services/user.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AlertComponent, SpinnerComponent, NotFoundComponent],
  providers: [UserService]
})
export class SharedModule { }
