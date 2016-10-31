import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishListsComponent } from './wish-lists.component';
import { WishListComponent } from './wish-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wish-lists',
    pathMatch: 'full'
  },
  {
    path: 'wish-lists',
    component: WishListsComponent
  },
  {
    path: 'wish-list/:id',
    component: WishListComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
