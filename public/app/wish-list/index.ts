import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WishListComponent } from './wish-list.component';
import { WishListListComponent } from './wish-list-list.component';
import { WishListDetailComponent } from './wish-list-detail.component';
import { WishListFormComponent } from './wish-list-form.component';
import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListService } from './wish-list.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WishListRoutingModule
  ],
  declarations: [
    WishListComponent,
    WishListDetailComponent,
    WishListFormComponent,
    WishListListComponent
  ],
  providers: [
    WishListService
  ]
})
export class WishListModule { }
