import {Component} from "@angular/core";

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
