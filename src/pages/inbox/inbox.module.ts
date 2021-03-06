import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import { InboxProvider } from '../../providers/inbox/inbox';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
  ],
  providers:[
    InboxProvider,
]
})
export class InboxPageModule {}
