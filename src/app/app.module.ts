import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./shared/header.component";
import {FooterComponent} from "./shared/footer.component";
import {PlayerComponent} from "./anime/player.component";
import {AnimeComponent} from "./anime/anime.component";
import {HomeComponent} from "./home/home.component";
import {MangaComponent} from "./manga/manga.component";
import {MangaReaderComponent} from "./manga/manga-reader.component";
import {OpeningsComponent} from "./openings/openings.component";
import {AudioPlayerComponent} from "./openings/audio-player.component";
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule} from "@angular/forms";
import {MyFilterPipe} from "./pipe/my-filter.pipe";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, PlayerComponent,
    AnimeComponent, HomeComponent, MangaComponent, MangaReaderComponent,
    OpeningsComponent, AudioPlayerComponent, ProfileComponent, MyFilterPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
