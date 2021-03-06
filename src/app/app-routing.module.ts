import { AlbumComponent } from './album/album.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { MembershipComponent } from './membership/membership.component';
import { MusicComponent } from './music/music.component';

import { LoginsComponent } from './logins/logins.component';

const routes: Routes = [
  { path:'membership',component:MembershipComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'album/:id/:slug', component: MusicComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'album/:id', component: AlbumDetailComponent },
  { path: 'album', component: AlbumComponent},
  {path:'login',component:LoginsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
