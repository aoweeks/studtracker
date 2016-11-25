
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

}