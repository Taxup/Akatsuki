import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class MangaService {
  domain = 'https://narutoplanet.ru/'
  naruto1to700="/manga/naruto/Naruto_Manga_1-700_Narutoplanet.ru.rar"
  mangas = []

  constructor(private logService: LogService) {}

  getMangaList() {
    this.mangas.push({title: "Naruto", id: "1-700", url: this.domain+this.naruto1to700, img: "https://gen.jut.su/templates/school/images/manga_naruto.jpg"})
    for (let i = 50; i >= 1; i--) {
      this.mangas.push({title: "Boruto", id: i, url: this.domain+"manga/boruto/"+i+"_Narutoplanet.ru.zip", img: "https://gen.jut.su/templates/school/images/manga_boruto.jpg"})
    }
    this.logService.write("getMangaList method is called")
    return this.mangas
  }
}
