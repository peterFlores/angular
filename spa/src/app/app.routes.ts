import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';

import { HeroesComponent } from './components/heroes/heroes.component';

import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/:termino', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
