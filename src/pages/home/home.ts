import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

import { StatsPage } from '../stats/stats';

import { SettingsData } from '../../providers/settings-data';

import { DeckModel } from '../../models/deck';

import { PlayerHandModel } from '../../models/player-hand';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private suits: string[] = ["s", "h", "c", "d"];
  private ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
  					  "J", "Q", "K", "A"];


  constructor(public navCtrl: NavController, private deck: DeckModel, private playerHand: PlayerHandModel,
  		public settingsData: SettingsData) {

  }

  openSettingsPage(): void {
  	this.navCtrl.push(SettingsPage);
  }

  openStatsPage(): void {
  	this.navCtrl.push(StatsPage);
  }


  //DEV PURPOSES ONLY
  consolelog(data){
  	console.log(data);
  }


 

}
