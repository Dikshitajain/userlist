import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './users/addusers/addusers.component';
import { UsersComponent } from './users/users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'add', component: AddusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
