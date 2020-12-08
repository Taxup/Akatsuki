import {AfterContentInit, Component, Directive, EventEmitter, Input, Output} from "@angular/core";
import {VideoService} from "../../services/video.service";

@Component({
    selector: 'anime-content',
    templateUrl: './anime-content.component.html',
    styleUrls: ['./anime-content.component.sass']
})


export class AnimeContentComponent {
    animeTitles
    animeEpisodesList
    episode

    prevEpisode
    nextEpisode

    choice: any;
    temp: any;
    i = 0;

    constructor(private videoService: VideoService) {
    }

    ngOnInit() {

        this.videoService.getJSON().subscribe(data => {
            this.animeTitles = data
            if (this.animeEpisodesList == null) {
                this.animeEpisodesList = this.animeTitles[0].episodes
                this.choice = 'Naruto'
                this.episode = this.animeEpisodesList[0]
                this.setPrevNextEpisodes(0)
                console.log(this.episode.id)
            }
        })

    }

    selectTitle(title: any) {
        for (let i = 0; i < this.animeTitles.length; i++) {
            if (this.animeTitles[i].title == title) {
                this.animeEpisodesList = null
                this.choice = title
                this.animeEpisodesList = this.animeTitles[i].episodes
                this.episode = this.animeEpisodesList[0]
                this.i = 0
                this.setPrevNextEpisodes(0)
                break
            }
        }
    }

    selectEpisode(i) {
        this.i = i
        this.episode = this.animeEpisodesList[i]
        this.setPrevNextEpisodes(i)
    }


    setPrevNextEpisodes(i) {
        if (this.animeEpisodesList[i - 1] == null) this.prevEpisode = null
        else this.prevEpisode = this.animeEpisodesList[i - 1].id
        if (this.animeEpisodesList[i + 1] == null) this.nextEpisode = null
        else this.nextEpisode = this.animeEpisodesList[i + 1].id
    }
}

@Directive({selector: '[after-if]'})
export class AfterIfDirective implements AfterContentInit {
    @Output('after-if')
    public after: EventEmitter<void> = new EventEmitter<void>();

    public ngAfterContentInit(): void {
        // timeout helps prevent unexpected change errors
        setTimeout(() => this.after.next());
    }
}
