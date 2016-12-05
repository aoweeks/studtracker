import { Injectable } from '@angular/core';
import { PlayerHandModel } from '../models/player-hand';

/*
  Generated class for the SettingsData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsData {

  private fourColourDeck: boolean = true;
  private sevenCardModeOn: boolean = true;
  private hapticOn: boolean = true;
  private soundOn: boolean = true;

  constructor(private playerHand: PlayerHandModel) {

  }

  getDeckColours(): boolean{
  	return this.fourColourDeck;
  }

  setDeckColours(isFourColours: boolean): void {
  	this.fourColourDeck = isFourColours;
  }



  getFiveOrSevenMode(): number {
    return this.sevenCardModeOn ?  7 : 5;

  }

  setFiveOrSevenMode(isSevenMode: boolean): void {
    
    if(isSevenMode == false) this.playerHand.trimToFive();

    this.sevenCardModeOn = isSevenMode;
  }



  getHapticOn(): boolean {
    return this.hapticOn;
  }

  setHapticOn(isHapticOn: boolean): void {
    this.hapticOn = isHapticOn;
  }



  getSoundOn(): boolean {
    return this.soundOn;
  }

  setSoundOn(isSoundOn: boolean): void {
    this.soundOn = isSoundOn;
  }

}
