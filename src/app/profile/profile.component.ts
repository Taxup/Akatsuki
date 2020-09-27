import {Component} from "@angular/core";

@Component({
  selector: 'profile',
  template:
  '<header [isActiveProfile]="isActiveProfile"></header>' +
    '<div>Profile</div>' +
    '<foot></foot>'
})

export class ProfileComponent {
  isActiveProfile = 'active'
}
