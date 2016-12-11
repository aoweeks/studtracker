import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsData } from '../../providers/settings-data';
import { AboutPage } from '../about/about.ts';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public settingsData: SettingsData) {}

  ionViewWillLeave(): void{
  	this.settingsData.saveData();
  }

  openAboutPage(){
  	this.navCtrl.push(AboutPage);
  }

}
