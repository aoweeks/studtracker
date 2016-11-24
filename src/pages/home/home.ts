import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  suits: string[] = ["s", "h", "c", "d"];
  values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
  					  "J", "Q", "K", "A"];

  constructor(public navCtrl: NavController) {
    
  }

  openSettingsPage(): void {
  	this.navCtrl.push(SettingsPage);
  }

}
