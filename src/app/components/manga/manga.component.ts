import {Component} from "@angular/core";
import {MangaService} from "../../services/manga.service";

@Component({
  selector: 'manga',
  template:
    '<app-header [isActiveManga]="isActiveManga"></app-header>' +
    '<manga-reader></manga-reader>' +
    '<app-footer></app-footer>'
})

export class MangaComponent {
  isActiveManga = 'active'

}
