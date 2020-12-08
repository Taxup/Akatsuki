import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/shared/header.component";
import {FooterComponent} from "./components/shared/footer.component";
import {AfterIfDirective, AnimeContentComponent} from "./components/anime/anime-content.component";
import {AnimeComponent} from "./components/anime/anime.component";
import {HomeComponent} from "./components/home/home.component";
import {MangaComponent} from "./components/manga/manga.component";
import {MangaReaderComponent} from "./components/manga/manga-reader.component";
import {MusicComponent} from "./components/music/music.component";
import {AudioPlayerComponent} from "./components/music/audio-player.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MusicService} from "./services/music.service";
import {SearchFilterPipe} from "./pipe/my-filter.pipe";
import {VideoService} from "./services/video.service";
import {VideoPlayerComponent} from "./components/anime/video-player.component";
import {LogService} from "./services/log.service";
import {MangaService} from "./services/manga.service";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {GalleryService} from "./services/gallery.service";
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
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [Title, MusicService, VideoService, MangaService, LogService, GalleryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
