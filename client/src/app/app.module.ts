import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { MovieService } from './services/movie.service';
import { SharedModule } from './shared/shared.module';
import { AlertService } from './services/alert.service';
import { UploadService } from './services/upload.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [MovieService, AlertService, UploadService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
