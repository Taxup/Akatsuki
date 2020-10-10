import {Component} from "@angular/core";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent {
  isActiveProfile = 'active'
  subscriptionCost = 19.99
}
