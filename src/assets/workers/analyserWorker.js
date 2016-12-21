
function findBestComboScore(hand, combos) {


	let highestHandScore = -1;

	for(let combo of combos){

		let fiveCardHand = [];
		for(let whichCard of combo){
			if(hand[whichCard]) fiveCardHand.push(hand[whichCard]);
		}

		let currentHandScore = getHandValue(fiveCardHand);
		if (currentHandScore > highestHandScore) highestHandScore = currentHandScore;

	}

	return highestHandScore;
}





function getHandValue(hand) {

	if(hand.length < 1){
		return -1;
	} else {

  	//
  	let ranks = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  	let suits = [0,0,0,0];

  	let flush =  false;
  	let straight = false;

  	let quadCount = 0;
  	let tripCount = 0;
  	let pairCount = 0;
  	let highCard = 0;

  	//Tally cards in each suit, and each rank
  	for(let card of hand){
  		suits[card.suitPos]++;
  		ranks[card.rankPos]++;
  	}

  	//Check if all 5 cards are the same suit
  	for(let i = 0; i < 4; i++){
  		if(suits[i] == 5){
  			flush = true;
  			break;
  		}
  	}

  	//Check if 5 cards in a row present, and tally quads, trips, pairs
  	let streak = 0;
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


function getCombinations(k,n) {
	//console.log('called getcombinations' + ' ' + k + ' ' + n);


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


function calculateNextCardValues(currentHand, remainingDeck) {



	let newHand = [];

	let handCombos = getCombinations(5, currentHand.length + 1);
	let nextCardValues = [];


	for(let i = 0; i < remainingDeck.length; i++){
		newHand = currentHand.slice(0);
		newHand.push(remainingDeck[i]);
		nextCardValues.push(findBestComboScore(newHand, handCombos));

	}

	return ( calculatePotentialHandOdds(nextCardValues) );
}


function calculateEndOfHandValues(currentHand, remainingDeck, cardsToGo) {


	let newHand = [];

	let combos = getCombinations(cardsToGo, remainingDeck.length);
	let handCombos = getCombinations(5, currentHand.length + cardsToGo);
	let endOfHandValues = [];

	console.log(combos.length);
	//Arbitrary temp number til fix is implemented
	if(combos.length < 20000){
		for(let i = 0; i < combos.length; i++){
			newHand = currentHand.slice(0);
			
			for(let j = 0; j < combos[i].length; j++){
				let nextCard = remainingDeck[combos[i][j]];
				newHand.push(nextCard);
			}


			endOfHandValues.push(findBestComboScore(newHand, handCombos));
		}

		return ( calculatePotentialHandOdds(endOfHandValues) );

		//TEMP HACK "FIX"
	} else { return Array<number>(22); }//[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; }
}




function calculatePotentialHandOdds(potentialHandValues) {

	let tallyOfHandValues = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	let tallyOfOdds = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	for(let handValue of potentialHandValues){
		//Increment the chances of this hand, but also all
		//weaker hands as it is '% of making this hand (or better)'
		for(let i = 0; i <= handValue; i++){
			tallyOfHandValues[i]++;
		}
	}

	for(let i = 0; i < 22; i++){
		tallyOfOdds[i] = (tallyOfHandValues[i] / potentialHandValues.length) * 100;
	}

	return tallyOfOdds;

}


self.onmessage = args => {
    let currentHand = args.data[0];
    let remainingDeck = args.data[1];


    //Determine whether this worker is calculating next card or end of hand, based on number of args
    if(args.data.length == 2){
    	postMessage( calculateNextCardValues(currentHand, remainingDeck) );

    } else{
	    let cardsToGo = args.data[2];

	    postMessage( calculateEndOfHandValues(currentHand, remainingDeck, cardsToGo) );
	}

}