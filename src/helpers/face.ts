export class FaceHelper {

	private faceHtml: any = new Array(0);

	constructor(){
		this.populateCardFaces();
		console.log(this.faceHtml);
	}


	getCardFace(suitPos: number, rankPos: number): string{
		return this.faceHtml[suitPos][rankPos];
	}

	populateCardFaces(){

		//Clubs
		this.faceHtml.push([

				//2
				[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
					<g id="Card">
						<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
							c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
							c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
					</g>
					<g id="Corners">
						<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="club-colour" fill="#00B300" font-family="'FjallaOne'" font-size="57.6">2</text>
						<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="club-colour" fill="#00B300" font-family="'FjallaOne'" font-size="57.6">2</text>
						<path id="Suit_1_" class="club-colour" fill="#00B300" d="M45.478,110.813c-0.309,0-0.612,0.021-0.911,0.057c0.58-1.101,0.911-2.354,0.911-3.685
							c0-4.371-3.542-7.914-7.913-7.914s-7.913,3.543-7.913,7.914c0,1.331,0.332,2.583,0.911,3.685c-0.299-0.036-0.603-0.057-0.912-0.057
							c-4.371,0-7.914,3.542-7.914,7.913c0,4.37,3.543,7.914,7.914,7.914c0.857,0,1.681-0.141,2.454-0.393v0.005l4.35-1.59
							c-0.483,4.853-2.25,8.487-2.25,8.487h3.359h3.358c0,0-1.765-3.635-2.248-8.487l3.995,1.46c0.073,0.028,0.148,0.056,0.223,0.083
							l0.133,0.048v-0.005c0.771,0.253,1.596,0.393,2.453,0.393c4.372,0,7.914-3.544,7.914-7.914
							C53.392,114.354,49.849,110.813,45.478,110.813z"/>
						<path id="Suit" class="club-colour" fill="#00B300" d="M314.523,393.188c0.309,0,0.61-0.021,0.909-0.057c-0.577,1.102-0.909,2.354-0.909,3.686
							c0,4.369,3.542,7.912,7.91,7.912c4.371,0,7.914-3.543,7.914-7.912c0-1.332-0.332-2.584-0.91-3.686
							c0.299,0.035,0.604,0.057,0.91,0.057c4.371,0,7.914-3.541,7.914-7.912s-3.543-7.914-7.914-7.914c-0.855,0-1.681,0.143-2.451,0.395
							v-0.005l-4.353,1.591c0.483-4.854,2.25-8.486,2.25-8.486h-3.358h-3.357c0,0,1.766,3.635,2.248,8.486l-3.994-1.461
							c-0.073-0.025-0.148-0.056-0.223-0.082l-0.135-0.048v0.005c-0.771-0.253-1.596-0.395-2.451-0.395c-4.371,0-7.914,3.543-7.914,7.914
							S310.152,393.188,314.523,393.188z"/>
					</g>
					<g id="Face">
						<path id="Pip_1_" class="club-colour" fill="#00B300" d="M164.086,75.998c0.622,0,1.232,0.044,1.834,0.114c-1.166-2.214-1.834-4.732-1.834-7.409
							c0-8.789,7.124-15.914,15.913-15.914c8.791,0,15.914,7.125,15.914,15.914c0,2.677-0.666,5.195-1.834,7.409
							c0.603-0.07,1.213-0.114,1.836-0.114c8.789,0,15.914,7.125,15.914,15.914s-7.125,15.914-15.914,15.914
							c-1.726,0-3.381-0.281-4.937-0.789v0.01l-8.748-3.199c0.972,9.762,4.524,17.068,4.524,17.068h-6.754h-6.754
							c0,0,3.549-7.309,4.52-17.068l-8.032,2.938c-0.148,0.057-0.3,0.111-0.45,0.164l-0.267,0.098v-0.01
							c-1.553,0.508-3.209,0.789-4.934,0.789c-8.79,0-15.914-7.125-15.914-15.914C148.172,83.123,155.296,75.998,164.086,75.998z"/>
						<path id="Pip" class="club-colour" fill="#00B300" d="M195.914,428.002c-0.621,0-1.232-0.043-1.834-0.113c1.166,2.213,1.834,4.732,1.834,7.408
							c0,8.789-7.123,15.914-15.912,15.914c-8.791,0-15.914-7.125-15.914-15.914c0-2.676,0.666-5.195,1.834-7.408
							c-0.602,0.07-1.213,0.113-1.836,0.113c-8.789,0-15.914-7.125-15.914-15.913c0-8.789,7.125-15.914,15.914-15.914
							c1.725,0,3.381,0.281,4.936,0.789v-0.01l8.748,3.198c-0.971-9.762-4.525-17.067-4.525-17.067h6.754h6.754
							c0,0-3.549,7.31-4.521,17.067l8.031-2.938c0.147-0.057,0.301-0.11,0.45-0.164l0.267-0.098v0.01
							c1.554-0.508,3.209-0.789,4.935-0.789c8.791,0,15.914,7.125,15.914,15.914C211.828,420.877,204.705,428.002,195.914,428.002z"/>
					</g>
				</svg>`],

				//3
				[``],

				//4
				[``],

				//5
				[``],

				//6
				[``],

				//7
				[``],

				//8
				[``],

				//9
				[``],

				//10
				[``],

				//J
				[``],

				//Q
				[``],

				//K
				[``],

				//A
				[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
					<g id="Card">
						<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
							c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
							c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
					</g>
					<g id="Corners">
						<g>
							<text id="Rank_16_" transform="matrix(1 0 0 1 24.1826 76.3516)" class="club-colour" fill="#00B300" font-family="'FjallaOne'" font-size="57.6">A</text>
							<text id="Rank_15_" transform="matrix(-1 0 0 -1 335.8174 427.6484)" class="club-colour" fill="#00B300" font-family="'FjallaOne'" font-size="57.6">A</text>
							<path id="Suit_16_" class="club-colour" fill="#00B300" d="M45.478,110.813c-0.309,0-0.612,0.021-0.911,0.057c0.58-1.101,0.911-2.354,0.911-3.685
								c0-4.371-3.542-7.914-7.913-7.914s-7.913,3.543-7.913,7.914c0,1.331,0.332,2.583,0.911,3.685
								c-0.299-0.036-0.603-0.057-0.912-0.057c-4.371,0-7.914,3.542-7.914,7.913c0,4.37,3.543,7.914,7.914,7.914
								c0.857,0,1.681-0.141,2.454-0.393v0.005l4.35-1.59c-0.483,4.853-2.25,8.487-2.25,8.487h3.359h3.358c0,0-1.765-3.635-2.248-8.487
								l3.995,1.46c0.073,0.028,0.148,0.056,0.223,0.083l0.133,0.048v-0.005c0.771,0.253,1.596,0.393,2.453,0.393
								c4.372,0,7.914-3.544,7.914-7.914C53.392,114.354,49.849,110.813,45.478,110.813z"/>
							<path id="Suit_15_" class="club-colour" fill="#00B300" d="M314.523,393.188c0.309,0,0.61-0.021,0.909-0.057c-0.577,1.102-0.909,2.354-0.909,3.686
								c0,4.369,3.542,7.912,7.91,7.912c4.371,0,7.914-3.543,7.914-7.912c0-1.332-0.332-2.584-0.91-3.686
								c0.299,0.035,0.604,0.057,0.91,0.057c4.371,0,7.914-3.541,7.914-7.912s-3.543-7.914-7.914-7.914c-0.855,0-1.681,0.143-2.451,0.395
								v-0.005l-4.353,1.591c0.483-4.854,2.25-8.486,2.25-8.486h-3.358h-3.357c0,0,1.766,3.635,2.248,8.486l-3.994-1.461
								c-0.073-0.025-0.148-0.056-0.223-0.082l-0.135-0.048v0.005c-0.771-0.253-1.596-0.395-2.451-0.395
								c-4.371,0-7.914,3.543-7.914,7.914S310.152,393.188,314.523,393.188z"/>
						</g>
					</g>
					<g id="Face">
						<path id="Pip_1_" class="club-colour" fill="#00B300" d="M211.086,232.231c-1.215,0-2.406,0.083-3.58,0.222c2.277-4.325,3.58-9.248,3.58-14.474
							c0-17.17-13.914-31.088-31.083-31.088c-17.172,0-31.086,13.918-31.086,31.088c0,5.227,1.302,10.149,3.58,14.474
							c-1.173-0.14-2.367-0.222-3.581-0.222c-17.17,0-31.088,13.914-31.088,31.085c0,17.166,13.918,31.086,31.088,31.086
							c3.366,0,6.603-0.549,9.639-1.543v0.021l17.089-6.247c-1.896,19.063-8.839,33.344-8.839,33.344h13.194h13.192
							c0,0-6.934-14.281-8.83-33.344l15.693,5.733c0.285,0.11,0.58,0.222,0.879,0.323l0.52,0.188v-0.021
							c3.031,0.994,6.268,1.543,9.635,1.543c17.174,0,31.09-13.922,31.09-31.088C242.176,246.146,228.26,232.231,211.086,232.231z"/>
					</g>
				</svg>`]
			]);

			//Hearts
			this.faceHtml.push([

				//2
			 	[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					  viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" fill="#ED1C24" font-family="'FjallaOne'" font-size="57.6">2</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" fill="#ED1C24" font-family="'FjallaOne'" font-size="57.6">2</text>
					<path id="Suit_4_" fill="#ED1C24" d="M54.011,109.774c0-5.892-4.069-10.668-9.089-10.668c-3.029,0-5.705,1.744-7.356,4.418
						c-1.652-2.674-4.328-4.418-7.355-4.418c-5.021,0-9.091,4.776-9.091,10.668c0,3.149,1.168,5.972,3.019,7.925h-0.016l13.443,14.444
						l13.441-14.444h-0.015C52.842,115.746,54.011,112.924,54.011,109.774z"/>
					<path id="Suit_1_" fill="#ED1C24" d="M305.991,394.227c0,5.891,4.068,10.668,9.088,10.668c3.029,0,5.705-1.744,7.355-4.418
						c1.652,2.674,4.328,4.418,7.356,4.418c5.021,0,9.09-4.777,9.09-10.668c0-3.149-1.168-5.973-3.019-7.926h0.015l-13.442-14.443
						l-13.439,14.443h0.014C307.159,388.254,305.991,391.076,305.991,394.227z"/>
				</g>
				<g id="Face">
					<path id="Pip_18_" fill="#ED1C24" d="M147.181,429.748c0,11.759,8.121,21.291,18.14,21.291c6.045,0,11.384-3.482,14.68-8.816
						c3.297,5.334,8.638,8.816,14.681,8.816c10.02,0,18.142-9.532,18.142-21.291c0-6.286-2.333-11.917-6.024-15.814h0.03l-26.826-28.824
						l-26.826,28.824h0.029C149.514,417.831,147.181,423.462,147.181,429.748z"/>
					<path id="Pip_7_" fill="#ED1C24" d="M212.82,74.251c0-11.758-8.122-21.291-18.143-21.291c-6.044,0-11.383,3.483-14.68,8.817
						c-3.296-5.334-8.636-8.817-14.68-8.817c-10.019,0-18.142,9.533-18.142,21.291c0,6.286,2.334,11.917,6.024,15.814h-0.03
						l26.827,28.826l26.826-28.826h-0.029C210.484,86.168,212.82,80.538,212.82,74.251z"/>
				</g>
				</svg>`],
				
				//3
				[``],

				//4
				[``],

				//5
				[``],

				//6
				[``],

				//7
				[``],

				//8
				[``],

				//9
				[``],

				//10
				[``],

				//J
				[``],

				//Q
				[``],

				//K
				[``],

				//A
				[``]
			 ]);

			//Spades
			this.faceHtml.push([
			 	//2
			 	[`S`],

			 	//3
			 	[``],

			 	//4
				[``],

				//5
				[``],

				//6
				[``],

				//7
				[``],

				//8
				[``],

				//9
				[``],

				//10
				[``],

				//J
				[``],

				//Q
				[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" fill="#231F20" font-family="'FjallaOne'" font-size="57.6">Q</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" fill="#231F20" font-family="'FjallaOne'" font-size="57.6">Q</text>
					<path id="Suit_4_" fill="#231F20" d="M51.466,114.274h0.001L37.564,98.97l-13.902,15.304h0.001
						c-1.976,2.118-2.756,5.223-1.767,8.16c1.436,4.259,6.054,6.549,10.314,5.113c0.833-0.282,1.59-0.689,2.261-1.188l0.001,0.003
						l1.978-1.585c-0.45,5.146-2.342,9.038-2.342,9.038h3.454h3.456c0,0-1.894-3.893-2.343-9.04l1.98,1.588l0.001-0.003
						c0.671,0.499,1.428,0.906,2.261,1.188c4.26,1.436,8.878-0.854,10.313-5.113C54.222,119.498,53.441,116.392,51.466,114.274z"/>
					<path id="Suit_5_" fill="#231F20" d="M308.535,389.726h-0.002l13.904,15.304l13.901-15.304h-0.001
						c1.975-2.118,2.756-5.224,1.766-8.159c-1.436-4.26-6.054-6.549-10.313-5.113c-0.833,0.281-1.591,0.689-2.261,1.188l-0.002-0.002
						l-1.977,1.585c0.449-5.146,2.342-9.038,2.342-9.038h-3.454h-3.456c0,0,1.895,3.894,2.344,9.041l-1.98-1.588l-0.002,0.002
						c-0.671-0.498-1.428-0.906-2.261-1.188c-4.261-1.436-8.878,0.854-10.313,5.113C305.779,384.502,306.561,387.607,308.535,389.726z"
						/>
				</g>
				<g id="Face">
					<g>
						<text transform="matrix(1 0 0 1 136.7632 326.7578)" fill="#231F20" font-family="'FjallaOne'" font-size="180">Q</text>
					</g>
				</g>
				</svg>`],

				//K
				[``],

				//A
				[``]
			 ]);


			//Diamonds
			this.faceHtml.push([

				//2
			 	[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">2</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">2</text>
				</g>
				<g id="Face">
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="180,459.12 207.363,418.073 180.001,377.027 152.635,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="180,44.88 207.363,85.927 180.001,126.973 152.635,85.927 	"/>
				</g>
				</svg>`],

				//3
			 	[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">3</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">3</text>
				</g>
				<g id="Face">
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="180,459.12 207.363,418.073 180.001,377.027 152.635,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="180,44.88 207.363,85.927 180.001,126.973 152.635,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="180,210.954 207.363,252.001 180.001,293.047 152.635,252.001 	"/>
				</g>
				</svg>`],
				
				//4
				[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 21.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">4</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 338.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">4</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
				</g>
				</svg>`],

				//5
				[`<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 337.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">5</text>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 22.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">5</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="180,210.954 207.363,252 180.001,293.047 152.635,252 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
				</g>
				</svg>`],

				//6
				[`<svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">6</text>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">6</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="115.833,210.954 88.468,252 115.831,293.047 143.197,252 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="244.168,210.954 271.532,252 244.169,293.047 216.803,252 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
				</g>
				</svg>`],

				//7
				[`<svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 333.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">7</text>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 26.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">7</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="115.833,210.954 88.468,252 115.831,293.047 143.197,252 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="244.168,210.954 271.532,252 244.169,293.047 216.803,252 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
					<polygon id="Pip_3_" class="diamond-blue" fill="#1A1AFF" points="179.999,127.917 152.635,168.964 179.998,210.01 207.363,168.964 	"/>
					<polygon id="Pip_6_" class="diamond-blue" fill="#1A1AFF" points="179.999,127.917 152.635,168.964 179.998,210.01 207.363,168.964 	"/>
				</g>
				</svg>`],

				//8
				[`<svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">8</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">8</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="115.833,210.954 88.468,252 115.831,293.047 143.197,252 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="244.168,210.954 271.532,252 244.169,293.047 216.803,252 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
					<polygon id="Pip_3_" class="diamond-blue" fill="#1A1AFF" points="179.999,127.917 152.635,168.964 179.998,210.01 207.363,168.964 	"/>
					<polygon id="Pip_7_" class="diamond-blue" fill="#1A1AFF" points="180.001,376.084 207.365,335.036 180.002,293.99 152.636,335.036 	"/>
				</g>
				</svg>`],

				//9
				[`<svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 336.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">9</text>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 23.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">9</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="115.833,155.596 88.468,196.643 115.831,237.689 143.197,196.643 	"/>
					<polygon id="Pip_6_" class="diamond-blue" fill="#1A1AFF" points="244.168,348.404 271.532,307.357 244.169,266.311 216.803,307.357 	"/>
					<polygon id="Pip_9_" class="diamond-blue" fill="#1A1AFF" points="115.833,348.404 88.468,307.357 115.831,266.311 143.197,307.357 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="244.168,155.596 271.532,196.643 244.169,237.689 216.803,196.643 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
					<polygon id="Pip_3_" class="diamond-blue" fill="#1A1AFF" points="180,293.047 207.365,252 180.001,210.953 152.635,252 	"/>
				</g>
				</svg>`],

				//10
				[`<svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 360 504" enable-background="new 0 0 360 504" xml:space="preserve">
				<g id="Card">
					<path id="Background" fill="#FFFFFF" stroke="#000000" stroke-width="2.85" stroke-miterlimit="10" d="M358.561,480.959
						c0,11.93-9.671,21.602-21.601,21.602H23.041c-11.93,0-21.6-9.672-21.6-21.602V23.04c0-11.93,9.67-21.6,21.6-21.6H336.96
						c11.93,0,21.601,9.67,21.601,21.6V480.959z"/>
				</g>
				<g id="Corners">
					<polygon id="Suit_3_" class="diamond-blue" fill="#1A1AFF" points="322.436,408.898 336.117,388.375 322.436,367.852 308.753,388.375 	"/>
					<polygon id="Suit_2_" class="diamond-blue" fill="#1A1AFF" points="37.564,95.102 23.882,115.625 37.564,136.148 51.247,115.625 	"/>
					<text id="Rank_2_" transform="matrix(1 0 0 1 11.1826 76.3516)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">10</text>
					<text id="Rank_3_" transform="matrix(-1 0 0 -1 348.8174 427.6484)" class="diamond-blue" fill="#1A1AFF" font-family="'FjallaOne'" font-size="57.6">10</text>
				</g>
				<g id="Face">
					<polygon id="Pip" class="diamond-blue" fill="#1A1AFF" points="115.833,44.88 88.468,85.927 115.831,126.973 143.197,85.927 	"/>
					<polygon id="Pip_1_" class="diamond-blue" fill="#1A1AFF" points="115.833,155.596 88.468,196.643 115.831,237.689 143.197,196.643 	"/>
					<polygon id="Pip_6_" class="diamond-blue" fill="#1A1AFF" points="244.168,348.404 271.532,307.357 244.169,266.311 216.803,307.357 	"/>
					<polygon id="Pip_9_" class="diamond-blue" fill="#1A1AFF" points="115.833,348.404 88.468,307.357 115.831,266.311 143.197,307.357 	"/>
					<polygon id="Pip_8_" class="diamond-blue" fill="#1A1AFF" points="244.168,155.596 271.532,196.643 244.169,237.689 216.803,196.643 	"/>
					<polygon id="Pip_2_" class="diamond-blue" fill="#1A1AFF" points="244.168,459.12 271.532,418.073 244.169,377.027 216.803,418.073 	"/>
					<polygon id="Pip_5_" class="diamond-blue" fill="#1A1AFF" points="115.833,459.12 88.468,418.073 115.831,377.027 143.197,418.073 	"/>
					<polygon id="Pip_4_" class="diamond-blue" fill="#1A1AFF" points="244.168,44.88 271.532,85.927 244.169,126.973 216.803,85.927 	"/>
					<polygon id="Pip_3_" class="diamond-blue" fill="#1A1AFF" points="180,182.332 207.365,141.285 180.001,100.238 152.635,141.285 	"/>
					<polygon id="Pip_10_" class="diamond-blue" fill="#1A1AFF" points="180,321.668 152.635,362.715 179.999,403.762 207.365,362.715 	"/>
				</g>
				</svg>`],

				//J
				[``],

				//Q
				[``],

				//K
				[``],

				//A
				[``]
			 ]);
	}
}