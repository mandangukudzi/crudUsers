import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeForm();
  }

  ionViewDidLoad() {
    //this.initializeForm();

  }

  public initializeForm(){
    this.userForm = new FormGroup({
      name: new FormControl('Read', Validators.required),
      surname: new FormControl('Only', Validators.required),
      display_name: new FormControl('Joe Bloggs2', Validators.required),
      email: new FormControl('navrae@propay.co.za', Validators.required),
      password:  new FormControl('$2y$10$7riWAIgQZL7O7JguKQtXF.6XAFgPOBJ9D1/lbjkxSvrRorS8KHri', Validators.required),
      id_number: new FormControl('4', Validators.required),
      cell: new FormControl('425345', Validators.required),
      fax: new FormControl('4262546', Validators.required),
      skype: new FormControl('23434', Validators.required)
      
      // fax: new FormControl('kudzi', Validators.required)
    })
  }

  onSubmit(){}
}
