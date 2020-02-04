import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDataComponent } from './user-data/user-data.component';
import { MaterialModule } from '../module/material/material.module';
import { UserLineNotifyComponent } from './user-line-notify/user-line-notify.component';

@NgModule({
  declarations: [UserDataComponent, UserLineNotifyComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
  ]
})
export class UserModule { }
