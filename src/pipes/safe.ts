import { Pipe } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({name: 'safe'})
export class SafePipe {
  constructor(public sanitizer: DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}