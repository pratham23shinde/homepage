import { Component } from '@angular/core';

@Component({
  selector: 'app-offercard',
  templateUrl: './offercard.component.html',
  styleUrls: ['./offercard.component.scss']
})
export class OffercardComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  selected = 'option2';
}
