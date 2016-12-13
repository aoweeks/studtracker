import { Component } from '@angular/core';
import { PlayerHandModel } from '../../models/player-hand';
import { SettingsData } from '../../providers/settings-data';
import { HandAnalyser } from '../../providers/hand-analyser';
import { StatsPage } from '../../pages/stats/stats';
import { NavController } from 'ionic-angular';

/*
  Generated class for the HandNavbar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'hand-navbar',
  templateUrl: 'hand-navbar.html'
})
export class HandNavbarComponent {

  private blankSpaceFace = `<svg version="1.1" class="stud-card blank-card" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
                              <g id="Card">
                                <path class="card-background" fill="#BD95CC" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
                                  c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
                                  c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
                              </g>
                            </svg>`


  constructor(  public playerHand: PlayerHandModel,
                private settingsData: SettingsData,
                public analyser: HandAnalyser,
                private navCtrl: NavController) {
  }


  getPlayerHandFaces(): string[] {
    let blankSpaces: number = this.settingsData.getFiveOrSevenMode() - this.playerHand.getHandSize();
    let playerHandFaces: string[];

    playerHandFaces = this.playerHand.getHandFaces().splice(0);

    //Add a blank space for each card still yet to go
    for(let i = 0; i < blankSpaces; i++){
      playerHandFaces.push(this.blankSpaceFace);
    }

    return playerHandFaces;
  }


  
  openStatsPage(): void {
    this.navCtrl.push(StatsPage);
  }

}
