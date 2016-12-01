import {Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {Gesture} from 'ionic-angular/gestures/gesture';
declare var Hammer;

@Directive({
  selector: '[doubleTap]'
})
export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;

   @Output()
   doubleTap: EventEmitter<any> = new EventEmitter();


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
		  this.doubleTap.emit(e);
		  console.log('pressed!!');
		});
	}

  ngOnDestroy() {
    this.pressGesture.destroy();
  }
}
