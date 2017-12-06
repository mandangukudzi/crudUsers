import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { User } from '../../user-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  editState: boolean = false;
  userToEdit: User;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {

  }

  ionViewDidLoad(){
    this.dataService.getUsers().subscribe((users) => {this.users = users;     
    });

  }

  addUser(){
    console.log("Added User");
    this.navCtrl.push("AddUserPage");
  }

  editUser(event, user){
    this.editState = true;
    this.userToEdit = user;
  }
}
