import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WishListComponent } from './wish-list.component';
import { WishListsComponent } from './wish-lists.component';

import { AppRoutingModule } from './app-routing.module';
import { WishListService } from './wish-list.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    WishListComponent,
    WishListsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    Title,
    WishListService
  ]
})
export class AppModule { }
