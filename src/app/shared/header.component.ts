import {Component, Input} from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  @Input() title
  @Input() isActiveHome
  @Input() isActiveAnime
  @Input() isActiveManga
  @Input() isActiveOpenings
  @Input() isActiveProfile
}
