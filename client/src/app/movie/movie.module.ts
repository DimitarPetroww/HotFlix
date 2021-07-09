import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { UploadService } from '../services/upload.service';
import { UserService } from '../services/user.service';

@NgModule({
  declarations: [DetailsComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    DetailsComponent,
    CreateComponent,
    EditComponent
  ],
  providers: [MovieService, UploadService, UserService]
})
export class MovieModule { }
