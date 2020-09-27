import {Component} from "@angular/core";

@Component({
  selector: 'home',
  template:
    '<header [isActiveHome]="isActiveHome"></header>' +
    '<div>Home page</div>' +
    '<foot></foot>'
})

export class HomeComponent{
  title = 'Home'
  isActiveHome = 'active'
}
