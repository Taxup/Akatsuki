import {Component} from "@angular/core";
import {ComponentCanDeactivate} from "../../guards/exit-profile.guard";
import {Observable} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.sass']
})

export class ProfileComponent implements ComponentCanDeactivate {
  isActiveProfile = 'active';
  subscriptionCost = 19.99;
  logged: boolean = false;
  registration: boolean

  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$")),
  })

  get emailLogin() {
    return this.loginForm.get("email")
  }

  registrationForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$")),
    passwordConfirm: new FormControl('', Validators.required)
  });

  get emailReg() {
    return this.registrationForm.get("email")
  }

  arePasswordsSame: boolean
  checkPasswords() {
    let pass = this.registrationForm.get('password').value;
    let confirmPass = this.registrationForm.get('passwordConfirm').value;

    this.arePasswordsSame = pass === confirmPass
  }

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
    console.log()
    this.logged = true;
  }

  onClickChangeForm() {
    this.registration = !this.registration;
  }
}
