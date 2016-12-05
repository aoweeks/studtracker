import { CardModel } from '../models/card';
import { Injectable } from '@angular/core';


@Injectable()
export class PlayerHandModel {

	//private static instance: PlayerHandModel;

	private hand: CardModel[] = Array(0);

	// public devNumber: any;

	constructor(){

	}

	   
    // static getInstance() {
    //     if (!PlayerHandModel.instance) {
    //         PlayerHandModel.instance = new PlayerHandModel();
    //         // ... any one time initialization goes here ...
    //         PlayerHandModel.instance.devNumber = Math.random();
            
    //     }
    //     return PlayerHandModel.instance;
    // }

    public getHand(): CardModel[]{
    	return this.hand;
    }

    public getHandSize(): number {
    	return this.hand.length;
    }

	public getHandFaces(): string[] {

		let handFaces: any = Array(0);


		for(let i = 0; i < this.hand.length; i++){

			handFaces.push(this.hand[i].getFace());
		}

		return handFaces;
	}

	public addCardToHand(cardToAdd: CardModel): void {

		this.hand.push(cardToAdd);

		this.sortHand();

	}

	public removeCardFromHand(cardToRemove: CardModel): void {

		let index = this.hand.indexOf(cardToRemove);

		if(index > -1) {
			this.hand.splice(index, 1);
		}

		this.sortHand();

	}

	public emptyHand(): void {
		this.hand = [];
	}

	private sortHand(): void {

	}

}