import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimeComponent} from "./anime/anime.component";
import {HomeComponent} from "./home/home.component";
import {MangaComponent} from "./manga/manga.component";
import {OpeningsComponent} from "./openings/openings.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'openings', component: OpeningsComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
