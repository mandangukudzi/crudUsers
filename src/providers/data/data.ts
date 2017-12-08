//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { User } from '../../user-model';

@Injectable()
export class DataProvider {
  
  userDoc: AngularFirestoreDocument<User>;
//changed from User to any
  usersCollection: AngularFirestoreCollection<any>;
  
  users: Observable<any>;

  constructor(public afs: AngularFirestore) {

  
    this.usersCollection = this.afs.collection('propayUsers', ref => ref.orderBy('name', 'asc'));

    this.users = this.usersCollection.snapshotChanges().map(changes => {
      return changes.map(a=> {
        const data = a.payload.doc.data() as User;
        //data.id = a.payload.doc.id;
        return data;
     });
     });


  }

  getUsers(){
    return this.users
  }

  addUser(user: User){
    this.usersCollection.add(user).then((docRef) => {
      this.usersCollection.doc(docRef.id).update({
        userid: docRef.id
      })
    })
  }  

//    updateUser(user: User){
//     console.log("Updated: ", user.name);
//     this.userDoc = this.afs.doc(`propayUsers/${user.id}`);
//     this.userDoc.update(user);
//   }

  
//  deleteUser(user){
//    console.log("Everything deleted now...");
//    this.usersCollection.doc('propayUsers').delete();
//  }

update(user){
  this.usersCollection.doc(user.userid).update({
   user: 'newuser'
}).then(() => {console.log('updated');})
}

delete(user){
  this.usersCollection.doc(user.userid).delete().then(() => {console.log("deleted");})
}

}
