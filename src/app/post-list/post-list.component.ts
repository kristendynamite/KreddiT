import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  @Input() childPostList: Post[];
  @Output() clickSender = new EventEmitter();

 //  editButtonClicked(postToEdit: Post) {
 //   this.clickSender.emit(postToEdit);
 // }

}
