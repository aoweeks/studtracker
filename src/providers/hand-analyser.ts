import { Injectable } from '@angular/core';
import { CardModel } from '../models/card';

/*
  Generated class for the HandAnalyzer provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HandAnalyser {

  private cardNames = ["2", "3", "4", "5", "6", "7", "8", "9",
  					   	"10", "JACK", "QUEEN", "KING", "ACE"];

  constructor() {

  }

  analyseThisHand(hand: CardModel[]): string{

  	let handRanking = this.giveHandValue(hand);

  	switch(handRanking){
  		case -1:
  			return "NO HAND";
  		default:
  			return "HIGH CARD " + this.cardNames[handRanking];
  		case 14:
  			return "PAIR";
  		case 15:
  			return "2 PAIR";
  		case 16:
  			return "3 OF A KIND";
  		case 17:
  			return "STRAIGHT";
  		case 18:
  			return "FLUSH";
  		case 19:
  			return "FULL HOUSE";
  		case 20:
  			return "4 OF A KIND";
  		case 21:
  			return "STRAIGHT FLUSH";

  	}

  }





  giveHandValue(hand: CardModel[]): number{

  	if(hand.length < 1){
  		return -1;
  	} else {

	  	//
	  	let ranks: number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0];
	  	let suits: number[] = [0,0,0,0];

	  	let flush: boolean =  false;
	  	let straight: boolean = false;

	  	let quadCount: number = 0;
	  	let tripCount: number = 0;
	  	let pairCount: number = 0;
	  	let highCard: number = 0;

	  	//Tally cards in each suit, and each rank
	  	for(let card of hand){
	  		suits[card.getSuit()]++;
	  		ranks[card.getRank()]++;
	  	}

	  	//Check if all 5 cards are the same suit
	  	for(let i = 0; i < 4; i++){
	  		if(suits[i] == 5){
	  			flush = true;
	  			break;
	  		}
	  	}

	  	//Check if 5 cards in a row present, and tally quads, trips, pairs
	  	let streak: number = 0;
	  	for(let i = 0; i < 13; i++){

	  		if(ranks[i] == 4){
	  			quadCount++;
	  			streak++;
	  			highCard = i;
	  		} else if(ranks[i] == 3){
	  			tripCount++;
	  			streak++;
	  			highCard = i;
	  		} else if(ranks[i] == 2){
	  			pairCount++;
	  			streak++;
	  			highCard = i;
	  		} else if(ranks[i] == 1){
	  			streak++;
	  			highCard = i;
	  		} else{
	  			if(streak < 5){
	  				streak = 0;
	  			}
	  		}
	  		//console.log(streak);
	  	}

	  	if(streak >= 5) straight = true;

		//Now that the grunt work has been done, begin checking for actual hands

		if(straight && flush) return 21;

		if(quadCount > 0) return 20;

		if( (tripCount > 1) || (tripCount > 0 && pairCount > 0) ) return 19;

		if(flush) return 18;

		if(straight) return 17;

		if(tripCount > 0) return 16;

		if(pairCount > 1){
			return 15;
		} else if(pairCount == 1){
			return 14;
		} else{
			return highCard;
		}
	}


  }


	getCombinations(k,n) {
		console.log('called getcombinations' + ' ' + k + ' ' + n);
		
		let result = [], comb = [];
	    function next_comb(comb, k, n ,i = null) {
	        if (comb.length === 0) {
	        	for (i = 0; i < k; ++i) {
	        		comb[i] = i;
	        	}
	        	return true;
	        }

	        i = k - 1;
	        comb[i]++;

	        while ((i > 0) && (comb[i] >= n - k + 1 + i)) {
	        	--i; ++comb[i];
	        }

	        if (comb[0] > n - k) {
	        	return false;
	        } // No more combinations can be generated

	        for (i = i + 1; i < k; ++i) {
	        	comb[i] = comb[i-1] + 1;
	        }

	        return true;
	    }
		
		while (next_comb(comb, k, n)) {
			result.push(comb.slice());
		}
		
		return result;
	}


}
