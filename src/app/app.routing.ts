import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalsComponent } from './animals/animals.component';
import { FunnyComponent } from './funny/funny.component';
import { MakeupComponent } from './makeup/makeup.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { ScaryComponent } from './scary/scary.component';

const appRoutes: Routes = [
  {
   path: '',
   component: WelcomeComponent
 },
 {
   path: 'animals',
   component: AnimalsComponent
 },
 {
   path: 'funny',
   component: FunnyComponent
 },
 {
   path: 'makeup',
   component: MakeupComponent
 },
 {
   path: 'movies',
   component: MoviesComponent
 },
 {
   path: 'music',
   component: MusicComponent
 },
 {
   path: 'scary',
   component: ScaryComponent
 }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
