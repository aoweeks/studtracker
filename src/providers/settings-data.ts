import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { PlayerHandModel } from '../models/player-hand';
import { DataService } from '../providers/data';

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

  constructor(  private playerHand: PlayerHandModel,
                private platform: Platform,
                private dataService: DataService) {

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



  /*----- ACCESSING STORAGE -------
  =================================*/

  saveData() : void {
    let settings: any = [];

    settings.push({
      name: "sound-on",
      value: this.soundOn
    });

    settings.push({
      name: "haptic-on",
      value: this.hapticOn
    });

    settings.push({
      name: "seven-mode-on",
      value: this.sevenCardModeOn
    });

     settings.push({
      name: "four-colour-on",
      value: this.fourColourDeck
    });

     this.dataService.saveSettings(settings);
  }

  loadData() : void {
    this.platform.ready().then(() => {  

      this.dataService.getSavedSettings().then((settings) => {

         let savedSettings: any = false;

         if(typeof(settings) != "undefined"){
           savedSettings = JSON.parse(settings);
         }

         console.log(savedSettings);

         if(savedSettings){

           savedSettings.forEach((savedSetting) => {
              switch(savedSetting.name){
                case "four-colour-on":
                  console.log("IN Four COLOUrS");
                  this.setDeckColours(savedSetting.value);
                  break;
                case "sound-on":
                  this.setSoundOn(savedSetting.value);
                  break;
                case "haptic-on":
                  this.setHapticOn(savedSetting.value);
                  break;
                case "seven-mode-on":
                  this.setFiveOrSevenMode(savedSetting.value);
                  break;
              }

           })
         }

      });

    });
  }

}
