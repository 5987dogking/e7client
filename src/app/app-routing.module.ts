import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardGuard } from './guard/routeGuard/route-guard.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'client/rail/railStation' },
  {
    path: '', canActivate: [RouteGuardGuard], children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
      { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
