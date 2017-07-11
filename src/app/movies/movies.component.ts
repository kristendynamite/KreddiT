import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  moviesPostList: Post [] = [
    new Post("The Conjuring", "movies", "http://vignette4.wikia.nocookie.net/filmguide/images/4/45/CJR_1SHT_ALT_INTL_DEBUT_ONLINE.jpg/revision/latest?cb=20130524185140", "Four loko normcore man braid vape man bun bushwick. Photo booth ugh subway tile franzen, try-hard beard ennui synth master cleanse bitters quinoa umami. Freegan af beard four loko cold-pressed lyft, shoreditch art party.")];

  constructor() { }

  ngOnInit() {
  }

}
