import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  public versionNumber = 'unknown';

  constructor(public navCtrl: NavController, private platform: Platform) {

	if(this.platform.is('cordova')) {
	    AppVersion.getVersionNumber().then((s) => {
	    this.versionNumber = s;
	  })
	}
  }

  ionViewDidLoad() {
    console.log('Hello AboutPage Page');
  }

}
