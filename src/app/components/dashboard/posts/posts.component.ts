import { PostService } from './../../../_service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts
  constructor(private postSer: PostService) { }
  onDelete(id){
    this.postSer.deletePost(id).subscribe(
      data => {console.log(data)
        this.postSer.getAllPosts().subscribe(
          data => this.posts = data);
      }
    )
  }
  ngOnInit() {
    this.postSer.getAllPosts().subscribe(
      data => this.posts = data);
  }

}
