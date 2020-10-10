import {Component, Input} from "@angular/core";

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styles: ["player{\n" +
  "  background-image: url(\"https://wallpapertag.com/wallpaper/full/b/4/e/826161-cool-zetsu-akatsuki-wallpaper-1920x1080-smartphone.jpg\")\n" +
  "  background-size: cover" +
  "}"]
})

export class PlayerComponent {
  @Input() naruto: any[];
  i=1
}
