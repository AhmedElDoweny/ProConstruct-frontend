import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/_service/post.service';
import {ClientService} from 'src/app/_service/client.service';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  posts = [];

  constructor(private postservice: PostService, private clientservice: ClientService) {
  }

  ngOnInit() {
    this.clientservice.getClient().subscribe(c => {
      console.log(c);
      this.posts = c.post;
      console.log(c);
    });
  }

}
