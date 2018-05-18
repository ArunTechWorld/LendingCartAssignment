import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { UsersProvider } from '../../providers/users/users';
@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
  ],
  providers: [
    UsersProvider,
  ],
})
export class UsersPageModule {}
