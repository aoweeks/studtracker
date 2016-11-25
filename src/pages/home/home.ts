import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

import { StatsPage } from '../stats/stats';

import { SettingsData } from '../../providers/settings-data';

import { DeckModel } from '../../models/deck';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  suits: string[] = ["s", "h", "c", "d"];
  ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
  					  "J", "Q", "K", "A"];

  public fourColourDeck: boolean = false;

  constructor(public navCtrl: NavController, public deck: DeckModel, public settingsData: SettingsData) {
    
  }

  openSettingsPage(): void {
  	this.navCtrl.push(SettingsPage);
  }

  openStatsPage(): void {
  	this.navCtrl.push(StatsPage);
  }

  //DEV PURPOSES ONLY
  consolelog(){
  	console.log();
  }


 

}
