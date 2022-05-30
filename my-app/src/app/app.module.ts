import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
