import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [DetailsComponent, CreateComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    DetailsComponent,
    CreateComponent
  ]
})
export class MovieModule { }
