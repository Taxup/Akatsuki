import {AfterContentInit, Component, Directive, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})

export class PlayerComponent {
  @Input() animes: any;
  animeUrls
  i = 1;
  choice: any;
  temp: any;

  selectTitle(title: any) {
    this.animeUrls = null
    for (let i = 0; i < this.animes.length; i++) {
      if (this.animes[i].title == title) {
        this.choice = title
        this.animeUrls = this.animes[i].anime
        console.log(this.animeUrls)
        break
      }
    }
  }

  ngOnInit() {
    if (this.animeUrls == null) {
      this.animeUrls = this.animes[0].anime
      this.choice = 'Naruto'
    }
  }
}

@Directive({selector: '[after-if]'})
export class AfterIfDirective implements AfterContentInit {
  @Output('after-if')
  public after: EventEmitter<void> = new EventEmitter<void>();

  public ngAfterContentInit(): void {
    // timeout helps prevent unexpected change errors
    setTimeout(() => this.after.next());
  }
}
