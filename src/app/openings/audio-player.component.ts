import {Component} from "@angular/core";
import {Opening} from "../pipe/opening";
import {OpeningService} from "../services/opening.service";

@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.component.html'
})


export class AudioPlayerComponent {

  filter = new Opening()
  openings: Opening[]

  constructor(private openingService: OpeningService) {
  }

  ngOnInit() {
    // Load books from the books service on init
    this.openingService.getOpenings().subscribe(
      (openings: Opening[]) => {
        this.openings = openings;// Start off by showing all books on a single page.
      });
  }
}
