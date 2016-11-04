import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListModule } from './wish-list/';
import { LoginModule } from './login/';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    WishListModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [Title]
})
export class AppModule { }
