
export class CardModel {

	public status: string = "in-the-deck";
	public face: string;

	private suitPos: number;
	private rankPos: number;

	constructor(suitPos: number, rankPos: number, face: string){

		this.suitPos = suitPos;
		this.rankPos = rankPos;
		this.face = face;

	}

	public getFace(): string{
		return this.face;
	}

	public getSuit(): number{
		return this.suitPos;
	}

	public getRank(): number{
		return this.rankPos;
	}




}