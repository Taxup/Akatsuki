import {Component, Input} from "@angular/core";
import {MangaService} from "../../services/manga.service";

@Component({
  selector: 'manga-reader',
  templateUrl: 'manga-reader.component.html',
  styleUrls: ['manga-reader.component.sass']
})

export class MangaReaderComponent {
  mangas = []

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.mangaService.getJSON().subscribe(data=>{
      this.mangas = data
      console.log(this.mangas)
    })
  }
}
