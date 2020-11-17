import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post: PostModel;
  constructor() { }

  ngOnInit() {
  }

  like(){
    this.post.loveIts = this.post.loveIts + 1;
  }

  dislike() {
    this.post.loveIts = this.post.loveIts - 1;
  }

}
