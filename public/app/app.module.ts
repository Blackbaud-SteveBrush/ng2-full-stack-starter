import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WishListModule } from './wish-list/';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    WishListModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [Title]
})
export class AppModule { }
