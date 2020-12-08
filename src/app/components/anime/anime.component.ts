import {Component} from "@angular/core";
import {VideoService} from "../../services/video.service";

@Component({
  selector: 'anime',
  template:
    '<app-header [isActiveAnime]="isActiveAnime"></app-header>' +
    '<anime-content></anime-content>'
})

export class AnimeComponent {
  title = 'Anime'
  isActiveAnime = 'active'
  animeTitles = []


}
