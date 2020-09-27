import {Component} from "@angular/core";

@Component({
  selector: 'anime',
  template:
    '<header [isActiveAnime]="isActiveAnime"></header>' +
    '<player [animes]="animes"></player>' +
    '<foot></foot>'
})

export class AnimeComponent{
  title = 'Anime'
  isActiveAnime = 'active'
  animes = ["https://lol.anipower.ru/Nar/Naruto_001.mp4", "https://lol.anipower.ru/Nar/Naruto_002.mp4", "https://lol.anipower.ru/Nar/Naruto_003.mp4", "https://lol.anipower.ru/Nar/Naruto_004.mp4"]
}
