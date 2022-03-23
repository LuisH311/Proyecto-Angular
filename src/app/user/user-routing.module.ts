import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './create-users/create-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListUsersComponent

  },
  {
    path: 'create',
    component: CreateUsersComponent
  },
  {
    path: 'delete',
    component: DeleteUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
