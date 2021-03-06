import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CreateProfilePage } from '../create-profile/create-profile';

/**
 * Generated class for the UniqueIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unique-id',
  templateUrl: 'unique-id.html',
})
export class UniqueIdPage {
  createProfilePage = CreateProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UniqueIdPage');
  }

}
