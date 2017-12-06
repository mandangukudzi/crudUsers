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

  usersCollection: AngularFirestoreCollection<User>;
  //users: Observable<User[]>;
  users: Observable<any>;

  constructor(public afs: AngularFirestore) {
    this.users = this.afs.collection('propayUsers').valueChanges();
  }

  getUsers(){
    return this.users
  }

  

}
