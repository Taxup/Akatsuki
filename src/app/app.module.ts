import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./shared/header.component";
import {FooterComponent} from "./shared/footer.component";
import {AfterIfDirective, AnimeContentComponent} from "./anime/anime-content.component";
import {AnimeComponent} from "./anime/anime.component";
import {HomeComponent} from "./home/home.component";
import {MangaComponent} from "./manga/manga.component";
import {MangaReaderComponent} from "./manga/manga-reader.component";
import {MusicComponent} from "./music/music.component";
import {AudioPlayerComponent} from "./music/audio-player.component";
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule} from "@angular/forms";
import {MusicService} from "./services/music.service";
import {SearchFilterPipe} from "./pipe/my-filter.pipe";
import {AnimeVideoUrlsService} from "./services/anime-video-urls.service";
import {VideoPlayerComponent} from "./anime/video-player.component";
import {LogService} from "./services/log.service";
import {MangaService} from "./services/manga.service";
import {GalleryComponent} from "./gallery/gallery.component";
import {AnimeImageUrlService} from "./services/anime-image-url.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, AnimeContentComponent,
    AnimeComponent, HomeComponent, MangaComponent, MangaReaderComponent,
    MusicComponent, AudioPlayerComponent, ProfileComponent, SearchFilterPipe,
    AfterIfDirective, VideoPlayerComponent, GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule
  ],
  providers: [Title, MusicService, AnimeVideoUrlsService, MangaService, LogService, AnimeImageUrlService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
