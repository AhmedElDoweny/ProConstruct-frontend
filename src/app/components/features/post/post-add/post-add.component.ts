import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/_service/post.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/_models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  
  // posts:Post[]=[];
  addPostForm:FormGroup;
  map = false
  showMap(){
    return this.map = true
  }
  

  addPostt(){
    console.log(this.addPostForm.value);
    this.postServ.addPost(this.addPostForm.value).subscribe(a=>{
      console.log(a);
    })
  }
  lng:number = 31.035738300000002
  lat:number = 31.335663299999997
  
  locationChoosen = true

  saveLocation(){
    return  this.map = false
  }
  selectLocation(event){
    this.lat = event.coords.lat
    this.lng = event.coords.lng
    this.locationChoosen = true
  }
  constructor(private postServ:PostService,private router:Router) { }


  getLocation(){  // current location by browser
    navigator.geolocation.getCurrentPosition((position) => {
      this.lat = position.coords.latitude
      this.lng = position.coords.longitude
    }
      // function success(position) {
      //   const lat = position.coords.latitude;
      //   const lng = position.coords.longitude;}
        
    )
  }
  ngOnInit() {
    // this.postServ.getAllPosts().subscribe(a=>{
    // this.posts=a;
    // });
    
    this.addPostForm = new FormGroup({
      // _id: new FormControl(100,Validators.required),
      title: new FormControl("",Validators.required),
      category:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required),
      price:new FormControl(1000,Validators.required),
      image:new FormControl("1.jpg",Validators.required),
      client:new FormControl(1,Validators.required),
      location: new FormControl({lng: this.lng, lat:this.lat})
    })
  }

}

