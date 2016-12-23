import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AppVersion } from 'ionic-native';
import { SettingsData } from '../../providers/settings-data';

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

  private versionNumber: number = null;

  constructor(public navCtrl: NavController,
              public settingsData: SettingsData,
              private platform: Platform) {

      if(this.platform.is('cordova')) {
          AppVersion.getVersionNumber().then((s) => {
          this.versionNumber = s;
        })
      }
  }

  ionViewWillLeave(): void{
  	this.settingsData.saveData();
  }

}
