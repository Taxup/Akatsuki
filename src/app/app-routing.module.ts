import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnimeComponent} from "./anime/anime.component";
import {HomeComponent} from "./home/home.component";
import {MangaComponent} from "./manga/manga.component";
import {MusicComponent} from "./music/music.component";
import {ProfileComponent} from "./profile/profile.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {MusicGuard} from "./music.guard";
import {ExitProfileGuard} from "./exit-profile.guard";
import {AdminGuard} from "./admin.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'music', component: MusicComponent, canActivate: [MusicGuard]},
  {path: 'profile', component: ProfileComponent, canDeactivate: [ExitProfileGuard]},
  {path: 'gallery', component: GalleryComponent},
  {
    path: 'admin',
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule),
    canLoad: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MusicGuard, ExitProfileGuard, AdminGuard]
})
export class AppRoutingModule {
}
