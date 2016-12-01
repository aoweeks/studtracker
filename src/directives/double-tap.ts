import {Directive, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';
declare var Hammer;

@Directive({
  selector: '[double-tap]'
})
export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

	ngOnInit() {
		this.pressGesture = new Gesture(this.el, {
		  recognizers: [
		    [Hammer.Tap, {taps: 2}]
		  ]
		});
		this.pressGesture.listen();
		this.pressGesture.on('tap', e => {
		  console.log(this.el.click);
		});
	}

  ngOnDestroy() {
    this.pressGesture.destroy();
  }
}
