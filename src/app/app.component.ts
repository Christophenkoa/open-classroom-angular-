import { Component } from '@angular/core';
import {PostModel} from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: PostModel[] = [
    new PostModel('My first post',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indus' +
      'try\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ' +
      'a type specimen book. It has survived not only five centuries,' +
      ' but also the leap into electronic typesetting, remaining essentially unchanged. ',
      0),
    new PostModel('My second post',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      ' Lorem Ipsum has been the indus' +
      'try\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ' +
      'a type specimen book. It has survived not only five centuries,' +
      ' but also the leap into electronic typesetting, remaining essentially unchanged. ',
    0),
    new PostModel('My third post', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
      ' Lorem Ipsum has been the indus' +
      'try\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ' +
      'a type specimen book. It has survived not only five centuries,' +
      ' but also the leap into electronic typesetting, remaining essentially unchanged. ',
    0)
  ];


}
