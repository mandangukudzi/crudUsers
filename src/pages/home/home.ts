import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import { DataProvider } from '../../providers/data/data';
import { User } from '../../user-model';
import { UserDetailPage } from '../user-detail/user-detail';


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
    console.log("Editing : ", user.name);
    this.editState = true;
    this.userToEdit = user;
  }

  deleteUser(event, user){
    console.log("Deleting: ", user.name);    
    this.dataService.deleteUser(user);
    
  }

  userDetail(event, user){
    console.log("From homepage the user is: ", user.name);
    let myModal = this.modalCtrl.create(UserDetailPage , {'user': user} );
    
    myModal.present();
  }
}
