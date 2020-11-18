import {Component} from "@angular/core";
import {MusicService} from "../services/music.service";

@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.component.html',
  // styleUrls: ['audio-anime-content.component.sass']
})


export class AudioPlayerComponent {

  filter: any = ''
  // openings: any[]
  openingList = []

  constructor(private openingService: MusicService) {
  }

  ngOnInit() {
    this.openingList = this.openingService.getOpenings();
  }
}
