import {Component} from "@angular/core";

@Component({
  selector: 'manga',
  template:
    '<app-header [isActiveManga]="isActiveManga"></app-header>' +
    '<manga-reader [mangas]="mangas"></manga-reader>' +
    '<app-footer></app-footer>'
})

export class MangaComponent {
  isActiveManga = 'active'
  narutoplanet = 'https://narutoplanet.ru/'
  naruto1to700="/manga/naruto/Naruto_Manga_1-700_Narutoplanet.ru.rar"
  mangas = []

  ngOnInit() {
    this.mangas.push({title: "Naruto", id: "1-700", url: this.narutoplanet+this.naruto1to700, img: "https://gen.jut.su/templates/school/images/manga_naruto.jpg"})
    for (let i = 50; i >= 1; i--) {
      this.mangas.push({title: "Boruto", id: i, url: this.narutoplanet+"manga/boruto/"+i+"_Narutoplanet.ru.zip", img: "https://gen.jut.su/templates/school/images/manga_boruto.jpg"})
    }
    console.log(this.mangas)
  }

}
