import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/_service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/_models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private postServ: PostService, private aroute: ActivatedRoute) {
  }
  x=3;
  postInfo: Post = new Post(1, '', '', '', 1000, '', 1);

  ngOnInit() {
    this.aroute.params.subscribe(a => {
      this.postServ.getPostDetails(a.id).subscribe(s => {
        this.postInfo = s;
        console.log(s);
        console.log(this.postInfo["client"]);

      });
    });
  }

}
