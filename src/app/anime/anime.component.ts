import {Component} from "@angular/core";

@Component({
  selector: 'anime',
  template:
    '<app-header [isActiveAnime]="isActiveAnime"></app-header>' +
    '<player [animes]="animes"></player>'
})

export class AnimeComponent {
  title = 'Anime'
  isActiveAnime = 'active'
  animes = [
    {'title': 'Naruto', 'anime': []},
    {'title': 'Naruto Shippuuden', 'anime': []},
    {'title': 'Death Note', 'anime': []}
  ]

  ngOnInit() {
    for (let k = 0; k < this.animes.length; k++) {
      if (this.animes[k].title == 'Naruto') {
        for (let i = 1; i <= 220; i++) {
          if (i < 10) {
            this.animes[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_00" + i + ".mp4"})
          } else if (i < 100) {
            this.animes[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_0" + i + ".mp4"})
          } else {
            this.animes[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_" + i + ".mp4"})
          }
        }
      } else if (this.animes[k].title == 'Death Note') {
        for (let i = 1; i <= 37; i++) {
          this.animes[k].anime.push({id: i, url: "https://hdd.anipower.ru/Death_Note/Death_Note_" + i + ".mp4"})
        }
      } else if (this.animes[k].title == 'Naruto Shippuuden') {
        for (let i = 1; i <= 500; i++) {
          if (i == 221 || i == 248 || i == 273 || i == 286) {
            this.animes[k].anime.push({id: i+"-"+(1+i), url: "https://hdd.anipower.ru/NarSh/"+i+"-"+(++i)+".mp4"})
          } else {
            this.animes[k].anime.push({id: i, url: "https://hdd.anipower.ru/NarSh/" + i + ".mp4"})
          }
        }
      }
    }
  }
}
