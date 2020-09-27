import {Component} from "@angular/core";

@Component({
  selector: 'manga',
  template:
    '<header [isActiveManga]="isActiveManga"></header>' +
    '<manga-reader></manga-reader>' +
    '<foot></foot>'
})

export class MangaComponent {
  isActiveManga = 'active'
}
