//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable } from 'rxjs/Observable';


import { User } from '../../user-model';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  
  userDoc: AngularFirestoreDocument<User>;

  usersCollection: AngularFirestoreCollection<User>;
  //users: Observable<User[]>;
  users: Observable<any>;

  constructor(public afs: AngularFirestore) {
    //this.users = this.afs.collection('propayUsers').valueChanges();
    this.usersCollection = this.afs.collection('propayUsers', ref => ref.orderBy('name', 'asc'));

    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a=> {
        const data = a.payload.doc.data() as User;
        //data.id = a.payload.doc.id +" ";
        return data;
     });
     });
     


    // this.users = this.usersCollection.snapshotChanges().map( changes => {
    //   return changes.map( a => {
    //   const data = a.payload.doc.data() as User;
    //   data.id = a.payload.doc.id;
    //   return data; 
    //   });
    // });
  }

  getUsers(){
    return this.users
  }

  addUser(user: User){
    this.usersCollection.add(user);
  }  

  deleteUser(user: User){
    this.userDoc = this.afs.doc(`propayUsers/{$user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User){
    this.userDoc = this.afs.doc(`propayUsers/{$user.id}`);
    this.userDoc.update(user);
  }
}
