import { Cart } from './../../../../_models/cart';
import { ClientService } from 'src/app/_service/client.service';
import { CartServiceService } from './../../../../_service/cart.service';
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
changeto=true;
changetoadd(){
  this.changeto=false
}
changetocancel(){
  this.changeto=true
}

  posts: Post[] = [];

  constructor(private postServ: PostService, private router: Router,private cartservice:CartServiceService,private clientservice:ClientService) {
  }

  ngOnInit() {
    this.postServ.getAllPosts().subscribe(a => {
      this.posts = a;
      console.log(a);      
    });
  }

}
