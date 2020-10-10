import {Component} from "@angular/core";
import {OpeningService} from "../services/opening.service";

@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.component.html'
})


export class AudioPlayerComponent {

  filter:any = ''
  openings: any[]

  tempOpenings = [{
    "title": "Ikimonogakari - Hotarunohikari",
    "url": "https://d4.hotplayer.ru/download/7128cdf29ed5e8100f73bd8ccef4caa9/-19318749_88032001/9d3af735f54d-92975b9eb895-a067cc9dad1/%D0%9D%D0%B0%D1%80%D1%83%D1%82%D0%BE%20-%202%20%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%20%D0%9E%D0%BF%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%205.mp3"
  },
    {
    "title": "Sign - FLOW",
    "url": "https://d4.hotplayer.ru/download/7128cdf29ed5e8100f73bd8ccef4caa9/116658177_103060680/331961caffb2-276c0e995dae-190d590ae6c6/%D0%BD%D0%B0%D1%80%D1%83%D1%82%D0%BE%20-%202%20%D0%BE%D0%BF%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3.mp3"
  },
    {
    "title": "Third",
    "url": "https://d4.hotplayer.ru/download/7128cdf29ed5e8100f73bd8ccef4caa9/-19318749_88032001/9d3af735f54d-92975b9eb895-a067cc9dad1/%D0%9D%D0%B0%D1%80%D1%83%D1%82%D0%BE%20-%202%20%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%20%D0%9E%D0%BF%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%205.mp3"
  },
  ]

  constructor(private openingService: OpeningService) {
  }

  ngOnInit() {
    // Load openings from the opening service on init
    this.openingService.getOpenings().subscribe(
      (openings: any[]) => {
        this.openings = openings;// Start off by showing all openings on a single page.
      });
  }
}
