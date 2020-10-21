import {Component} from "@angular/core";
import {AnimeVideoUrlsService} from "../services/anime-video-urls.service";

@Component({
  selector: 'anime',
  template:
    '<app-header [isActiveAnime]="isActiveAnime"></app-header>' +
    '<anime-content [animeTitles]="animeTitles"></anime-content>'
})

export class AnimeComponent {
  title = 'Anime'
  isActiveAnime = 'active'
  animeTitles = []

  constructor(private animeVideoUrlsService: AnimeVideoUrlsService) {
  }

  ngOnInit() {
    this.animeTitles = this.animeVideoUrlsService.getAnimeList()
  }
}
