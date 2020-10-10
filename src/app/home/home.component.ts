import {Component} from "@angular/core";

@Component({
  selector: 'home',
  template:
    '<app-header [isActiveHome]="isActiveHome"></app-header>' +
    '<div>Home page</div>' +
    '<app-footer></app-footer>'
})

export class HomeComponent {
  title = 'Home'
  isActiveHome = 'active'
}
