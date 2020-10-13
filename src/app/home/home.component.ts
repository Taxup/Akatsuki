import {Component} from "@angular/core";

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent {
  title = 'Home'
  isActiveHome = 'active'

  titles = [
    {title: 'Naruto', img: 'https://static.displate.com/857x1200/displate/2020-03-01/54294c7d669aade9321cbadb223201c8_148df365c02d6102db6a4ec2854b3a6f.jpg' },
    {title: 'Naruto Shippuuden', img: 'https://static.posters.cz/image/1300/plakaty/naruto-shippuden-i84239.jpg' },
    {title: 'Death Note', img: 'https://cdn.archonia.us/images/1-12312-1-1-original1/death-note-wall-scroll-count-down.jpg' },
    ]
}
