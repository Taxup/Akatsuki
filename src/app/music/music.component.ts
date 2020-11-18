import {Component} from "@angular/core";

@Component({
  selector: 'openings',
  template:
    '<app-header [isActiveMusic]="isActiveOpenings"></app-header>' +
    '<audio-player></audio-player>'
})

export class MusicComponent {
  isActiveOpenings = 'active'
  website = 'animethemes.moe'

}
