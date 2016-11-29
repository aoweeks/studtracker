import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsData {

  private fourColourDeck: boolean = true;
  private sevenCardMode: boolean = true;
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
    if(this.sevenCardMode = true){
      return 7;
    } else{
      return 5;
    }
  }

  setFiveOrSevenMode(isSevenMode: boolean): void {
    this.sevenCardMode = isSevenMode;
  }


  getHapticOn(): boolean {
    return this.hapticOn;
  }

  setHapticOn(isHapticOn: boolean): void {
    this.hapticOn = isHapticOn;
  }

}
