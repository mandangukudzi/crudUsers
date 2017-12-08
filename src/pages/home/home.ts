import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import { DataProvider } from '../../providers/data/data';
import { User } from '../../user-model';
import { UserDetailPage } from '../user-detail/user-detail';
import { EditUserPage } from '../edit-user/edit-user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
 

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
    let myModal = this.modalCtrl.create(EditUserPage , {'user': user} ); 
    
    myModal.present();
  }

    userDetail(event, user){    
    let myModal = this.modalCtrl.create(UserDetailPage , {'user': user} );    
    myModal.present();
  }

  deleteUser(event, user: User){      
     this.dataService.delete(user);    
   }
}
