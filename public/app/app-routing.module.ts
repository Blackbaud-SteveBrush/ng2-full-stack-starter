import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
//import { WishListListComponent } from './wish-list/wish-list-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wish-lists',
    pathMatch: 'full'
  },
  {
    path: 'wish-lists',
    loadChildren: () => new Promise(resolve => {
      (require as any).ensure([], (require: any) => {
        resolve(require('./wish-list/index').WishListModule);
      });
    })
    //loadChildren: './wish-list/index#WishListModule'
    //component: WishListListComponent
    // loadChildren: () => new Promise(resolve => {
    //   (require as any).ensure([], require => {
    //     resolve(require('./path/to/yourmodule').ModuleName);
    //   })
    // })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {}
