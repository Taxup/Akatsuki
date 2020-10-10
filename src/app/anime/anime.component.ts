import {Component} from "@angular/core";

@Component({
  selector: 'anime',
  template:
    '<app-header [isActiveAnime]="isActiveAnime"></app-header>' +
    '<player [naruto]="animes"></player>' +
    '<app-footer></app-footer>'
})

export class AnimeComponent{
  title = 'Anime'
  isActiveAnime = 'active'
  animes = [
    // {'id': 1, 'url': "https://lol.anipower.ru/Nar/Naruto_001.mp4"},
    // {'id': 2, 'url': "https://lol.anipower.ru/Nar/Naruto_002.mp4"},
    // {'id': 3, 'url': "https://lol.anipower.ru/Nar/Naruto_003.mp4"},
    // {'id': 4, 'url': "https://lol.anipower.ru/Nar/Naruto_004.mp4"},
    // {'id': 5, 'url': "https://lol.anipower.ru/Nar/Naruto_005.mp4"}
    ]

  ngOnInit() {
    for (let i = 1; i <= 220; i++) {
      if (i<10) {
        this.animes.push({id:i,url:"https://lol.anipower.ru/Nar/Naruto_00"+i+".mp4"})
      } else if (i<100) {
        this.animes.push({id:i,url:"https://lol.anipower.ru/Nar/Naruto_0"+i+".mp4"})
      } else {
        this.animes.push({id:i,url:"https://lol.anipower.ru/Nar/Naruto_"+i+".mp4"})
      }
    }
  }
}
