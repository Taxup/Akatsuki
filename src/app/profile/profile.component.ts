import {Component} from "@angular/core";
import {ComponentCanDeactivate} from "../exit-profile.guard";
import {Observable} from "rxjs";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html'
})

export class ProfileComponent implements ComponentCanDeactivate {
  isActiveProfile = 'active';
  subscriptionCost = 19.99;
  logged: boolean = false;
  email: any;
  password: any;

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.logged) {
      return confirm(
        "You didn't logged in\n" +
        "You want to exit page? Some features will not be available"
      );
    } else {
      return true;
    }
  }

  login() {
    this.logged = true;
  }
}
