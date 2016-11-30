import { Injectable } from '@angular/core';

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

  constructor() {

  }

  getDeckColours(): boolean{
  	return this.fourColourDeck;
  }

  setDeckColours(isFourColours: boolean): void {
  	this.fourColourDeck = isFourColours;
  }

  getFiveOrSevenMode(): number {

    console.log("GET: " + this.sevenCardModeOn);
    return this.sevenCardModeOn ?  7 : 5;

  }

  setFiveOrSevenMode(isSevenMode: boolean): void {
    this.sevenCardModeOn = isSevenMode;
    console.log("SET: " + isSevenMode);
  }


  getHapticOn(): boolean {
    return this.hapticOn;
  }

  setHapticOn(isHapticOn: boolean): void {
    this.hapticOn = isHapticOn;
  }

}
