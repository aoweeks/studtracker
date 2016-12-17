import { CardModel } from '../models/card';
import { DeckModel } from '../models/deck';
import { Injectable, Inject, forwardRef } from '@angular/core';


@Injectable()
export class PlayerHandModel {


	private hand: CardModel[] = Array(0);

	constructor(/*@Inject(forwardRef(() => DeckModel)) deck: DeckModel*/){ 
	}


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