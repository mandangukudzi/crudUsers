import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';

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

  constructor(public navCtrl: NavController, public dataService: DataProvider,
  public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
    this.dataService.getUsers().subscribe((users) => {this.users = users;     
    });

  }

  addUser(){
    let myModal = this.modalCtrl.create("AddUserPage");
    myModal.present();
    
  }

  editUser(event, user){
    console.log("The user is: ", user.name)
    this.editState = true;
    this.userToEdit = user;
  }

  deleteUser(event, user){
    console.log("User deleted: ", user.name);
    this.dataService.deleteUser(user);
  }

  userDetail(user){
    let myModal = this.modalCtrl.create("UserDetailPage" , {user: this.userToEdit} );
    myModal.present();
  }
}
