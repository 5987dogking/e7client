import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import { UserLineNotifyComponent } from './user-line-notify/user-line-notify.component';

const routes: Routes = [
  { path: 'userData', component: UserDataComponent },
  { path: 'userLineNotify', component: UserLineNotifyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
