import { Component } from '@angular/core';
import { PlayerHandModel } from '../../models/player-hand';
import { SettingsData } from '../../providers/settings-data';
import { HandAnalyser } from '../../providers/hand-analyser';

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


  constructor(private playerHand: PlayerHandModel, private settingsData: SettingsData, private analyser: HandAnalyser) {
  }


  getPlayerHandFaces(): string[] {
    return this.playerHand.getHandFaces();
  }

}
