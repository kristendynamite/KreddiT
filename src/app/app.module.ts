import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalsComponent } from './animals/animals.component';
import { FunnyComponent } from './funny/funny.component';
import { MakeupComponent } from './makeup/makeup.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { ScaryComponent } from './scary/scary.component';
import { routing } from './app.routing';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AnimalsComponent,
    FunnyComponent,
    MakeupComponent,
    MoviesComponent,
    MusicComponent,
    ScaryComponent,
    NewPostComponent,
    EditPostComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
