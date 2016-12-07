import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HandAnalyser } from '../../providers/hand-analyser';
import { PlayerHandModel } from '../../models/player-hand';



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

  constructor(public navCtrl: NavController, private analyser: HandAnalyser, private playerHand: PlayerHandModel) {

  	console.log("CONSTRUCTED");
  	this.analyser.calculatePotentialHandValues(playerHand.getHand(), 1);
  }

  ionViewDidLoad(){
  	console.log("LOADED");
  }

}
