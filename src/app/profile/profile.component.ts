import {AfterContentChecked, AfterContentInit, Component, DoCheck} from "@angular/core";

@Component({
  selector: 'profile',
  template:
  '<header [isActiveProfile]="isActiveProfile" [i]="i"></header>' +
    '<div>{{content}}</div>' +
    '<label>addContent</label>' +
    '<input type="checkbox" (click)="onClick()">' +
    '<foot></foot>'
})

export class ProfileComponent  implements DoCheck, AfterContentInit, AfterContentChecked{
  isActiveProfile = 'active'

  i = 0

  content:string
  private bool: boolean;

  onClick() {
    this.bool = !this.bool;
  }

  makeContent(text:string) {
    if (this.bool) {
      this.content+=text+"   "
    }
  }

  ngDoCheck() {
    console.log("ProfileComponent:ngDoCheck + profile is ", this.isActiveProfile)
    this.makeContent('DoCheck')
    this.log('DoCheck')
  }

  ngAfterContentInit() {
    this.makeContent('ngAfterContentInit')
    this.log(`ngAfterContentInit`)
  }

  ngAfterContentChecked(){
    this.makeContent('ngAfterContentChecked')
    this.log(`ngAfterContentChecked`)
  }
  private log(msg: string) {
    console.log(this.i + ". " + msg);
    this.i++;
  }
}
