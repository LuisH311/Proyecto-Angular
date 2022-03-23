import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';


@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUsersComponent,
    DeleteUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
