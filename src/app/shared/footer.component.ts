import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})

export class FooterComponent{
  currentDate = Date.now()

  img = '/naruto_dis/footer.jpg'
}
