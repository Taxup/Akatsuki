import {Component} from "@angular/core";
import {OpeningService} from "../services/opening.service";

@Component({
  selector: 'audio-player',
  templateUrl: 'audio-player.component.html',
  // styleUrls: ['audio-player.component.sass']
})


export class AudioPlayerComponent {

  filter: any = ''
  openings: any[]

  tempOpenings = []

  // constructor(private openingService: OpeningService) {
  // }

  openingTitles = [
    'OP1 Rocks', 'OP2 Haruka Kanata', 'OP3 Kanashimi wo Yasashisa ni',
    'OP4 GO!!!', 'OP5 Seishun Kyosokyoku', 'OP6 No Boy, No Cry',
    'OP7 Namikaze Satellite', 'OP8 Re:member', 'OP9 YURA YURA',
    'ED1 Wind', 'ED2 Harmonia', 'ED3 Viva Rock ~Japanese Side~',
    'ED4 ALIVE', 'ED5 Ima made Nando mo', 'ED6 Ryusei',
    'ED7 Mountain A Go Go Too', 'ED8 Hajimete Kimi to Shabetta', 'ED9 Nakushita Kotoba',
    'ED10 Speed', 'ED11 Soba ni Iru Kara', 'ED12 Parade',
    'ED13 Yellow Moon', 'ED14 Pinocchio', 'ED15 Scenario',
    'ED7 LIFE GOES ON'
  ]

  // https://animethemes.moe/video/Naruto-ED8.webm

  ngOnInit() {
    // this.tempOpenings.push({
    //   title: 'Hotaru no Hikari - temp',
    //   url: 'https://download.79url.com/check?sub1=mp3.cc&url=https%3A%2F%2Fstorage.mp3iq.com%2Fdownload%2F38350592%2FVmR2Uk5INnRUbXJIamF2cHFKVXhlUmFPS2lXRk1CNVBFcEVRT2draXY4VVRTS0M3YVh6WUFtbUIraVpuUjlmTTNRYVF6UVZvcFdqMmdoUVJHL2lFSDNSeFFyTFM2dU1Yd0dUdjliWjNGdHJkWmVvMW5vTkc0UFduWHFHWk5ER3M%2Fnaruto-2-sezon-5-opening-hotaru-no-hikari-sha-lala_%28mp3IQ.com%29.mp3'
    // })
    for (let i = 0, j = 0; i < 25; i++) {
      if (i < 9) {
        this.tempOpenings.push({
          title: this.openingTitles[i],
          url: 'https://animethemes.moe/video/Naruto-OP' + (i + 1) + '.webm'
        })
      } else {
        this.tempOpenings.push({
          title: this.openingTitles[i],
          url: 'https://animethemes.moe/video/Naruto-ED' + (j + 1) + '.webm'
        })
        j++
      }
    }
    console.log(this.tempOpenings)
    // Load openings from the opening service on init
    // this.openingService.getOpenings().subscribe(
    //   (openings: any[]) => {
    //     this.openings = openings;// Start off by showing all openings on a single page.
    //   });
  }
}
