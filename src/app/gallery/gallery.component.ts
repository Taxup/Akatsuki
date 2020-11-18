import {Component, OnInit} from '@angular/core';
import {AnimeImageUrlService} from "../services/anime-image-url.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  isActiveGallery = "active";

  constructor(private animeImageUrlService: AnimeImageUrlService) {
  }
  col1: any = []
  col2: any = []
  col3: any = []

  col4: any = []
  picUrls = []
  endpoints: any;
  temp: any;


  ngOnInit(): void {
    this.animeImageUrlService.getJSON().subscribe(data => {
      this.endpoints = data[0].endpoints
      this.selectEndpoint('cry')
      console.log(data[0].endpoints)
    });

  }

  selectEndpoint(temp: any) {
    for (let i = 0; i < this.endpoints.length; i++) {
      if (this.endpoints[i].endpoint == temp) {
        this.picUrls = this.endpoints[i].urls
      }
    }
    this.col1 = this.picUrls.slice(0, 7)
    this.col2 = this.picUrls.slice(7, 14)
    this.col3 = this.picUrls.slice(14, 21)
    this.col4 = this.picUrls.slice(21, 28)
  }
}

