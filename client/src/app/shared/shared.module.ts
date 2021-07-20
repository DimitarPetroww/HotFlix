import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [AlertComponent, SpinnerComponent]
})
export class SharedModule { }
