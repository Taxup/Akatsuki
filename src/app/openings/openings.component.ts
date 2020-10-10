import {Component} from "@angular/core";

@Component({
  selector: 'openings',
  template:
    '<app-header [isActiveOpenings]="isActiveOpenings"></app-header>' +
    '<audio-player></audio-player>' +
    '<app-footer></app-footer>'
})

export class OpeningsComponent {
  isActiveOpenings = 'active'
  website = 'animethemes.moe'


}
