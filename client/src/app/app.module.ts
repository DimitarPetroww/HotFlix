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
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';

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
    UserModule,
    MovieModule,

  ],
  exports: [
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
