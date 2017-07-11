import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-scary',
  templateUrl: './scary.component.html',
  styleUrls: ['./scary.component.scss']
})
export class ScaryComponent implements OnInit {

  scaryPostList: Post [] = [
    new Post("Lovecraft bar in Portland haunted?", "scary", "https://68.media.tumblr.com/20b50fed71199b73b0c76a4793cdc2c6/tumblr_inline_ol9d1jEYQJ1qc9zwd_500.jpg", "Kale chips gastropub organic vexillologist schlitz freegan. Tousled vegan swag fingerstache chillwave, humblebrag cliche fanny pack. Cold-pressed fanny pack edison bulb cornhole helvetica, flannel celiac small batch craft beer. Chillwave chambray truffaut la croix kogi you probably haven't heard of them pork belly hell of post-ironic wayfarers tacos blog aesthetic pour-over. Ennui dreamcatcher cronut austin vegan tofu.")
  ];

  constructor() { }

  ngOnInit() {
  }

}
