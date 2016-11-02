import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WishListComponent } from './wish-list.component';
import { WishListListComponent } from './wish-list-list.component';
import { WishListDetailComponent } from './wish-list-detail.component';
import { WishListFormComponent } from './wish-list-form.component';


const routes: Routes = [
  { path: '',
    component: WishListComponent,
    children: [
      { path: '', component: WishListListComponent },
      { path: 'create', component: WishListFormComponent },
      { path: ':id', component: WishListDetailComponent },
      { path: ':id/edit', component: WishListFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishListRoutingModule { }
