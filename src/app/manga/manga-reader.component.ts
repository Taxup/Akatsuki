import {Component, Input} from "@angular/core";

@Component({
  selector: 'manga-reader',
  templateUrl: 'manga-reader.component.html',
  styleUrls: ['manga-reader.component.sass']
})

export class MangaReaderComponent {
  @Input() mangas: any;

}
