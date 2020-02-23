import {Component, OnInit} from '@angular/core';
import {Post} from 'src/app/_models/post';
import {PostService} from 'src/app/_service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postServ: PostService, private router: Router) {
  }

  ngOnInit() {
    this.postServ.getAllPosts().subscribe(a => {
      this.posts = a;
      console.log(a);      
    });
  }

}
