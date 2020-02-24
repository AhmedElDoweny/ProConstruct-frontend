import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/_service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/_models/post';
import {Client} from 'src/app/_models/client';
import { ClientService } from 'src/app/_service/client.service';
import { CartServiceService } from 'src/app/_service/cart.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
 ordered:boolean=true;
  constructor(private postServ: PostService, private aroute: ActivatedRoute,private cartservice:CartServiceService,private clientservice:ClientService) {
  }

  postInfo: Post = new Post(1, '', '', '', 1000, '', new Client());

  ngOnInit() {
    this.aroute.params.subscribe(a => {
      this.postServ.getPostDetails(a.id).subscribe(s => {
        this.postInfo = s;
        console.log(s);

      });
    });
  }

}
