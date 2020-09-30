import {Component} from "@angular/core";

@Component({
  selector: 'openings',
  template:
    '<header [isActiveOpenings]="isActiveOpenings"></header>' +
    '<audio-player></audio-player>' +
    '<foot></foot>'
})

export class OpeningsComponent {
  isActiveOpenings = 'active'
  website = 'animethemes.moe'


}
