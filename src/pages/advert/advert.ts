import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Advert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-advert',
  templateUrl: 'advert.html'
})
export class AdvertPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AdvertPage Page');
  }

}
