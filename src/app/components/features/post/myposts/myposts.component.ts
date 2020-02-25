import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/_service/post.service';
import { ClientService } from 'src/app/_service/client.service';
import { Post } from 'src/app/_models/post';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  constructor(private postservice:PostService,private clientservice:ClientService) { }
posts=[];
  ngOnInit() {
    this.clientservice.getClient().subscribe(c=>{
      console.log(c);
      this.posts = c.post
    })
  }

}
