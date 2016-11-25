import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SettingsData {

  public fourColourDeck: boolean = true;

  constructor() {

  }

  getDeckColours(): boolean{
  	return this.fourColourDeck;
  }

}
