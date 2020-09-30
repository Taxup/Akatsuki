import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: 'home',
  template:
    '<header [isActiveHome]="isActiveHome" [i]="i"></header>' +
    '<div>Home page</div>' +
    '<button (click)="onClickButton()">add 1 to brand</button>' +
    '<foot></foot>'
})

export class HomeComponent implements OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'Home'
  isActiveHome = 'active'

  i = 0

  onClickButton() {
    this.i++
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  ngOnInit() {    		  console.log(":OnInit");  }
  ngAfterViewInit() {     console.log(":AfterViewInit");  }
  ngAfterViewChecked() {  console.log(":AfterViewChecked");  }
  ngOnDestroy() {    	  console.log(":OnDestroy");  }


}
