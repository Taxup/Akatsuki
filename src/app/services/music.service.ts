import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class MusicService {

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

  openingList = []

  constructor(private logService: LogService) {}

  public getOpenings() {

    for (let i = 0, j = 0; i < 25; i++) {
      if (i < 9) {
        this.openingList.push({
          title: this.openingTitles[i],
          url: 'https://animethemes.moe/video/Naruto-OP' + (i + 1) + '.webm'
        })
      } else {
        this.openingList.push({
          title: this.openingTitles[i],
          url: 'https://animethemes.moe/video/Naruto-ED' + (j + 1) + '.webm'
        })
        j++
      }
    }
    this.logService.write("getOpenings method called")
    return this.openingList
  }
}
