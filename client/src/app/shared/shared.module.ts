import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { AlertComponent } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SafePipe,
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [SafePipe, AlertComponent]
})
export class SharedModule { }
