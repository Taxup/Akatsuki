import {Component} from "@angular/core";

@Component({
  selector: 'openings',
  template:
    '<app-header [isActiveOpenings]="isActiveOpenings"></app-header>' +
    '<audio-player></audio-player>'
})

export class OpeningsComponent {
  isActiveOpenings = 'active'
  website = 'animethemes.moe'


}
