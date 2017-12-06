import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

import { User } from '../../user-model';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  userForm: FormGroup;
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.initializeForm();
    //this.navCtrl.setRoot(HomePage);
    
  }

  ionViewDidLoad() {
   
  }

  public initializeForm(){
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      display_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password:  new FormControl(null, Validators.required),
      id_number: new FormControl(null, Validators.required),
      cell: new FormControl(null, Validators.required),
      fax: new FormControl(null, Validators.required),
      skype: new FormControl(null, Validators.required)
      
      // fax: new FormControl('kudzi', Validators.required)
    })
  }

  onSubmit(){    
    this.dataProvider.addUser(this.userForm.value);
    this.navCtrl.push(HomePage);    

  }
}
