//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from '../../user-model';

@Injectable()
export class DataProvider {
  
  userDoc: AngularFirestoreDocument<User>;

  usersCollection: AngularFirestoreCollection<User>;
  //users: Observable<User[]>;
  users: Observable<any>;

  constructor(public afs: AngularFirestore) {

    //this.userDoc = this.afs.doc(‘propayUsers/’+user.id);
    //this.post = this.postDoc.valueChanges();
    //this.users = this.afs.collection('propayUsers').valueChanges();

   // this.userDoc = this.afs.doc<User>('propayUsers');
    this.usersCollection = this.afs.collection('propayUsers', ref => ref.orderBy('name', 'asc'));

    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a=> {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
     });
     });


  }

  getUsers(){
    return this.users
  }

  addUser(user: User){
    this.usersCollection.add(user);
  }  

 deleteUser(user: User){
    console.log("Deletion successful: ", user.name);
   // this.afs.doc(‘propayUsers/’+ user.id).delete();
    this.userDoc = this.afs.doc(`propayUsers/${user.id}`);
     this.userDoc.delete();
  }

  updateUser(user: User){
    this.userDoc = this.afs.doc(`propayUsers/${user.id}`);
    this.userDoc.update(user);
  }

 
  

}
