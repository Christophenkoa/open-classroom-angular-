import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  @Input() all_posts: PostModel[];
  constructor() { }

  ngOnInit() {
  }

}
