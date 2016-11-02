import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wish-lists',
    pathMatch: 'full'
  },
  {
    path: 'wish-lists',
    loadChildren: './wish-list/index.ts#WishListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
