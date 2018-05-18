import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { UserDetailsComponent } from '../../components/user-details/user-details';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage { 

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private usersProvider: UsersProvider,) {
  }

  private usersList;
  private filteredUsersList;
  ionViewDidLoad() {
    this.loadUsersList();
  }

  loadUsersList(){
    this.usersProvider.getUsers().then(
      (res) => {
        this.usersList= res;
        this.filteredUsersList= res;
      },
      (err) => {
        console.log('error accured while getting users list ' +err);
      });
  }

  userDetails(user){
    console.log('details');
    // this.navCtrl.push(UserDetailsComponent);
  }
  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredUsersList = this.usersList.filter((item) => {
        return (item.login.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      // By default all users will be shown
      this.filteredUsersList = this.usersList;
    }
  }
  
}
