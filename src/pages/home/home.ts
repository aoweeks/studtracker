import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AdMob } from 'ionic-native';

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

  public suits: string[] = ["s", "h", "c", "d"];
  public ranks: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10",
							  "J", "Q", "K", "A"];
  public resetCount: number = 0;


  constructor(	public navCtrl: NavController,
  				public deck: DeckModel,
  				private playerHand: PlayerHandModel,
  				public settingsData: SettingsData) {

  }

  ionViewDidLoad() : void {
  	this.settingsData.loadData();
  }

  openSettingsPage() : void {
  	this.navCtrl.push(SettingsPage);
  }

  onDoubleTap(e: Event, suitPos: number, rankPos: number) : void{
  	this.deck.toggleCardInPlayerHand(suitPos, rankPos);
  }

  resetDeck() : void{
  	if(this.deck.getTotalCardsInDeck() < 52){
	  	this.deck.resetDeck();

	  	this.resetCount++;
	  	if(this.resetCount > 4){
	  		if(Math.random() > 0.5){
	  			this.resetCount = 0;
	  			this.showInterstitialAd();
	  		}
	  	}
  	}
  }

  showInterstitialAd() : void {

  	console.log("Ad should be firing: " + AdMob);
  	if (AdMob) AdMob.showInterstitial();

  }
 

}
