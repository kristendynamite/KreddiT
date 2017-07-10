import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
