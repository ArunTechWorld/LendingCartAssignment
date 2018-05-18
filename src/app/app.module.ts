import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { InboxPage } from '../pages/inbox/inbox';
import { UsersPage } from '../pages/users/users';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersProvider } from '../providers/users/users';
import { InboxProvider } from '../providers/inbox/inbox';
import { InboxPageModule } from '../pages/inbox/inbox.module';
import { UsersPageModule } from '../pages/users/users.module';
import { ComponentsModule } from '../components/components.module';
import { UserDetailsComponent } from '../components/user-details/user-details';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InboxPageModule,
    UsersPageModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InboxPage,
    UsersPage,
    UserDetailsComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    UsersProvider,
    InboxProvider,

  ]
})
export class AppModule {}
