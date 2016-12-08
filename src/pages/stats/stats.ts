import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HandAnalyser } from '../../providers/hand-analyser';
import { PlayerHandModel } from '../../models/player-hand';
import { SettingsData } from '../../providers/settings-data';



/*
  Generated class for the Stats page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {

	private handRanks = ["PAIR", "2 PAIR", "3 OF A KIND", "STRAIGHT", "FLUSH",
						 "FULL HOUSE", "4 OF A KIND", "STRAIGHT FLUSH"];
	public handRows = [0,2,4,6];

  constructor(	public navCtrl: NavController,
  				private analyser: HandAnalyser,
  				private playerHand: PlayerHandModel,
  				private settingsData: SettingsData) {


    let numberOfCardsRemaining: number = this.settingsData.getFiveOrSevenMode() - this.playerHand.getHandSize();
    console.log("Made it into constructor");
    if(numberOfCardsRemaining > 0){
  		this.analyser.calculatePotentialHandValues(playerHand.getHand(), numberOfCardsRemaining);
  	} else{
  		this.analyser.calculateFullHandOdds(playerHand.getHand());
  	}

  }

  ionViewDidLoad(){
  	console.log("LOADED");
  }

}
