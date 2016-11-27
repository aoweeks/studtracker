import { CardModel } from '../models/card';
import { PlayerHandModel } from '../models/player-hand';
import { FaceHelper } from '../helpers/face';

export class DeckModel {



	private cards: any[][] = new Array(0);

	private playerHand: PlayerHandModel = new PlayerHandModel;

	private suitOdds: number[] = [];
	private rankOdds: number[] = [];
	
	private suitCardsInDeck: number[] = [0,0,0,0];
	private rankCardsInDeck: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	private totalCardsInDeck: number = 0;

	private faceHelper: FaceHelper;



	constructor(){
		
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

		this.playerHand.addCardToHand(this.cards[0][1]);
   		this.playerHand.getHandFaces();


		this.resetDeck();

	}



	toggleCardInDeck(suitPos: number, rankPos: number) : void {

		if(this.cards[suitPos][rankPos].status == "in-the-deck"){

			this.cards[suitPos][rankPos].status = "in-other-hand";

		} else{

			this.cards[suitPos][rankPos].status = "in-the-deck";

		}

		this.updateOdds();
	}

	toggleCardInPlayerHand(suitPos: number, rankPos: number) : void {


		if(this.cards[suitPos][rankPos].status == "in-player-hand"){

			this.cards[suitPos][rankPos].status = "in-the-deck";
			
		} else{

			this.cards[suitPos][rankPos].status = "in-player-hand";

		}

		this.updateOdds();
	}

	//Iterate through deck and change status of cards back to in deck
	resetDeck(): void {

		
		for(let suit = 0; suit < 4; suit++){
			for(let rank = 0; rank < 13; rank++){
				this.cards[suit][rank].status = "in-the-deck";
			}
		}

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