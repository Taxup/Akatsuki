import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimeComponent} from "./anime/anime.component";
import {HomeComponent} from "./home/home.component";
import {MangaComponent} from "./manga/manga.component";
import {OpeningsComponent} from "./openings/openings.component";
import {ProfileComponent} from "./profile/profile.component";
import {GalleryComponent} from "./galery/gallery.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'openings', component: OpeningsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'admin', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
