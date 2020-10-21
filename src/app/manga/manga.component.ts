import {Component} from "@angular/core";
import {MangaService} from "../services/manga.service";

@Component({
  selector: 'manga',
  template:
    '<app-header [isActiveManga]="isActiveManga"></app-header>' +
    '<manga-reader [mangas]="mangas"></manga-reader>' +
    '<app-footer></app-footer>'
})

export class MangaComponent {
  isActiveManga = 'active'
  mangas = []

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.mangas = this.mangaService.getMangaList()
    console.log(this.mangas)
  }
}
