import { CardModel } from '../models/card';
import { PlayerHandModel } from '../models/player-hand';
import { SettingsData } from '../providers/settings-data';
import { FaceHelper } from '../helpers/face';
import { Injectable } from '@angular/core';


@Injectable()
export class DeckModel {



	private cards: any[][] = new Array(0);


	private suitOdds: number[] = [];
	private rankOdds: number[] = [];
	
	private suitCardsInDeck: number[] = [0,0,0,0];
	private rankCardsInDeck: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	private totalCardsInDeck: number = 0;

	private faceHelper: FaceHelper;



	constructor(private playerHand: PlayerHandModel, private settingsData: SettingsData){
		
		this.faceHelper = new FaceHelper;

		//Turn the 1-dimensional cardStatus array into a two dimensional array
		//with 13 columns (for each value) in every row (for each suit)
		for(let suit = 0; suit < 4; suit++){
			this.cards.push([]);
			for(let rank = 0; rank < 13; rank++){

				let face = this.faceHelper.getCardFace(suit, rank);

				this.cards[suit].push(new CardModel(suit, rank, face));
			}
		}


		this.resetDeck();

	}


	toggleCardInDeck(suitPos: number, rankPos: number) : void {


		let currentCard = this.cards[suitPos][rankPos];

		if(currentCard.status == "in-the-deck"){

			currentCard.status = "in-other-hand";

		} else{

			if(currentCard.status == "in-player-hand"){
				this.playerHand.removeCardFromHand(currentCard);
			}
			currentCard.status = "in-the-deck";

		}

		this.updateOdds();
	}

	toggleCardInPlayerHand(suitPos: number, rankPos: number) : void {

		let currentCard = this.cards[suitPos][rankPos];

		if(currentCard.status == "in-player-hand"){

			currentCard.status = "in-the-deck";
			this.playerHand.removeCardFromHand(currentCard);
			
		} else{
			
			let numOfCardMode = this.settingsData.getFiveOrSevenMode();
			let handSize = this.playerHand.getHandSize();

			if(handSize < numOfCardMode) {
				currentCard.status = "in-player-hand";
				this.playerHand.addCardToHand(currentCard);
			}
		}
		console.log(this.playerHand);
		this.updateOdds();
	}

	//Iterate through deck and change status of cards back to in deck
	resetDeck(): void {

		
		for(let suit = 0; suit < 4; suit++){
			for(let rank = 0; rank < 13; rank++){
				this.cards[suit][rank].status = "in-the-deck";
			}
		}

		this.playerHand.emptyHand();
		this.updateOdds();
	}

	private updateOdds(): void {

		//Reset the number of cards in deck.
		//Suit reset in for loop below for greater efficiency
		this.totalCardsInDeck = 0;
		for(let rank = 0; rank < 13; rank++){
			this.rankCardsInDeck[rank] = 0;
		}


		for(let suit = 0; suit < 4; suit++){
			
			this.suitCardsInDeck[suit] = 0;

			for(let rank = 0; rank < 13; rank++){
				if(this.cards[suit][rank].status == "in-the-deck"){

					this.totalCardsInDeck++;
					this.suitCardsInDeck[suit]++;
					this.rankCardsInDeck[rank]++;
				}
			}
		}


		for(let suit = 0; suit < 4; suit++){

			//To prevent NaN if deck is empty
			if(this.totalCardsInDeck == 0){
				this.suitOdds[suit] = 0;
			} else {
				this.suitOdds[suit] = (this.suitCardsInDeck[suit] / this.totalCardsInDeck) * 100;
			}
		}


		for(let rank = 0; rank < 13; rank++){
			if(this.totalCardsInDeck == 0){
				this.rankOdds[rank] = 0;
			} else {
				this.rankOdds[rank] = (this.rankCardsInDeck[rank] / this.totalCardsInDeck) * 100;
			}
		}

	}


	getSuitOdds(suitPos: number): number {
		return this.suitOdds[suitPos];
	}

	getRankOdds(rankPos: number): number {
		return this.rankOdds[rankPos];
	}

	getCardStatus(suitPos: number, rankPos: number): string {
		return this.cards[suitPos][rankPos].status;
	}

	getCardFace(suitPos: number, rankPos: number): string {
		return this.cards[suitPos][rankPos].face;
	}

}