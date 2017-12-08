import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

import { User } from '../../user-model';




@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
   userForm: FormGroup;
   user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    //this.user = this.navParams.get('user');
    this.user = this.navParams.get('user');
    this.initializeForm();
  }

  ionViewDidLoad() {
    //console.log('Edit page, the user is: ', this.user.name);
  }

  public initializeForm(){
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name, Validators.required),
      surname: new FormControl(this.user.surname, Validators.required),
      display_name: new FormControl(this.user.display_name, Validators.required),
      email: new FormControl(this.user.email, Validators.required),
      password:  new FormControl(this.user.password, Validators.required),
      id_number: new FormControl(this.user.id_number, Validators.required),
      cell: new FormControl(this.user.cell, Validators.required),
      fax: new FormControl(this.user.fax, Validators.required),
      skype: new FormControl(this.user.skype, Validators.required)
      
      // fax: new FormControl('kudzi', Validators.required)
    })
  }

  onEdit(){
    console.log("Edit user page: ", this.user.name);
    this.dataProvider.update(this.user);
  }




}
