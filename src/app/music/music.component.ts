import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  musicPostList: Post [] = [
    new Post("Dr Dre to produce Eminem's next album", "music", "https://s3.amazonaws.com/hiphopdx-production/2017/07/Em1-827x620.jpg", "Craft beer everyday carry humblebrag aesthetic cold-pressed succulents lumbersexual cornhole fam snackwave. Af umami kogi glossier letterpress, stumptown authentic church-key PBR&B polaroid pug. Sartorial locavore microdosing, tumblr synth paleo tousled bespoke distillery gentrify activated charcoal butcher stumptown seitan lomo. Four loko normcore man braid vape man bun bushwick. Photo booth ugh subway tile franzen, try-hard beard ennui synth master cleanse bitters quinoa umami. Freegan af beard four loko cold-pressed lyft, shoreditch art party.")];

  constructor() { }

  ngOnInit() {
  }

}
