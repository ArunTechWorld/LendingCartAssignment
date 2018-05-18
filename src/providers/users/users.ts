import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: HttpClient,
    private loadingCtrl: LoadingController) {
    console.log('Hello UsersProvider Provider');
  }

  getUsers(){
    console.log('Users list');
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();
    return new Promise((resolve, reject) => {
      this.http.get('https://api.github.com/users', {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
        .subscribe(
          (res) => {
            loader.dismiss();
            resolve(res);
          },
          (err) => {
            loader.dismiss();
            reject(err);
          },
      );
    });
  }
}
