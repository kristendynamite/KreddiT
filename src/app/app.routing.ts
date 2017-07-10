import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
