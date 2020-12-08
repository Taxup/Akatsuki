import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AnimeComponent} from "./components/anime/anime.component";
import {HomeComponent} from "./components/home/home.component";
import {MangaComponent} from "./components/manga/manga.component";
import {MusicComponent} from "./components/music/music.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {MusicGuard} from "./guards/music.guard";
import {ExitProfileGuard} from "./guards/exit-profile.guard";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'anime', component: AnimeComponent},
  {path: 'manga', component: MangaComponent},
  {path: 'music', component: MusicComponent, canActivate: [MusicGuard]},
  {path: 'profile', component: ProfileComponent, canDeactivate: [ExitProfileGuard]},
  {path: 'gallery', component: GalleryComponent},
  {
    path: 'admin',
    loadChildren: () => import('./components/admin-module/admin-module.module').then(m => m.AdminModuleModule),
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
