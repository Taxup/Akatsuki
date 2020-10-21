import {LogService} from "./log.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AnimeVideoUrlsService {
  animeTitles = [
    {'title': 'Naruto', 'anime': []},
    {'title': 'Naruto Shippuuden', 'anime': []},
    {'title': 'Death Note', 'anime': []}
  ]

  constructor(private logService: LogService) {}

  getAnimeList() {
    for (let k = 0; k < this.animeTitles.length; k++) {
      if (this.animeTitles[k].title == 'Naruto') {
        for (let i = 1; i <= 220; i++) {
          if (i < 10) {
            this.animeTitles[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_00" + i + ".mp4"})
          } else if (i < 100) {
            this.animeTitles[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_0" + i + ".mp4"})
          } else {
            this.animeTitles[k].anime.push({id: i, url: "https://lol.anipower.ru/Nar/Naruto_" + i + ".mp4"})
          }
        }
      } else if (this.animeTitles[k].title == 'Death Note') {
        for (let i = 1; i <= 37; i++) {
          this.animeTitles[k].anime.push({id: i, url: "https://hdd.anipower.ru/Death_Note/Death_Note_" + i + ".mp4"})
        }
      } else if (this.animeTitles[k].title == 'Naruto Shippuuden') {
        for (let i = 1; i <= 500; i++) {
          if (i == 221 || i == 248 || i == 273 || i == 286) {
            this.animeTitles[k].anime.push({id: i+"-"+(1+i), url: "https://hdd.anipower.ru/NarSh/"+i+"-"+(++i)+".mp4"})
          } else {
            this.animeTitles[k].anime.push({id: i, url: "https://hdd.anipower.ru/NarSh/" + i + ".mp4"})
          }
        }
      }
    }
    this.logService.write("getAnimeList method called")
    return this.animeTitles
  }
}
