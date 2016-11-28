import { Component } from '@angular/core';
import { PlayerHandModel } from '../../models/player-hand';

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


  constructor(private playerHand: PlayerHandModel) {
  }


  getPlayerHandFaces(): string[] {
    return this.playerHand.getHandFaces();
  }

}
