import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-funny',
  templateUrl: './funny.component.html',
  styleUrls: ['./funny.component.scss']
})

export class FunnyComponent implements OnInit {

  funnyPostList: Post [] = [
    new Post("Kid gets hit in face with ball", "funny", "https://s-media-cache-ak0.pinimg.com/originals/b7/29/8f/b7298fa241543d08b59097ab96b82580.jpg", "Prism pinterest DIY hot chicken truffaut brunch. Sartorial post-ironic portland pabst, trust fund neutra umami. Next level hoodie lumbersexual roof party paleo, etsy thundercats hot chicken you probably haven't heard of them bitters vegan lyft whatever hashtag viral. Butcher marfa hoodie ennui typewriter austin, XOXO craft beer keytar everyday carry ugh. Gastropub shoreditch drinking vinegar, subway tile hella poutine kinfolk.")];
  constructor() { }

  ngOnInit() {
  }

}
