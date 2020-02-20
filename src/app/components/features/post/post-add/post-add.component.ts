import { Component, OnInit } from '@angular/core';
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
  imgpreview :string;
  

  get img(){
    return this.addPostForm.get('image');
  }

  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.addPostForm.patchValue({
      image: file
    });
    this.addPostForm.get("image").updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = ()=>{
      this.imgpreview = reader.result as string;        
    }
    reader.readAsDataURL(file);
}

  // addPostt(){
  //   //console.log(this.addPostForm.value);
  //   this.postServ.addPost(this.addPostForm.value).subscribe(a=>{
  //     console.log(a);
  //   })  
  // }

  addPostt(){
    this.postServ.addpost(
                          this.addPostForm.value.title,
                          this.addPostForm.value.category,
                          this.addPostForm.value.description,
                          this.addPostForm.value.price,
                          this.addPostForm.value.image,
                          this.addPostForm.value.client).subscribe(a=>{
                            console.log(a);
                            this.router.navigate(['/posts']);
                          },error =>{
                            console.log(error);
                          })
                          console.log(this.addPostForm.value);

                              
  }

  constructor(private postServ:PostService,private router:Router) { }

  ngOnInit() {    
    // this.addPostForm = new FormGroup({
    //   // _id: new FormControl(100,Validators.required),
    //   title: new FormControl("",Validators.required),
    //   category:new FormControl("",Validators.required),
    //   description:new FormControl("",Validators.required),
    //   price:new FormControl(1000,Validators.required),
    //   image:new FormControl("1.jpg",Validators.required),
    //   client:new FormControl(1,Validators.required)
    // })

    this.addPostForm = new FormGroup({
      // _id: new FormControl(100,Validators.required),
      title: new FormControl("",Validators.required),
      category:new FormControl("",Validators.required),
      description:new FormControl("",Validators.required),
      price:new FormControl("1000",Validators.required),
      image:new FormControl(""),
      client:new FormControl("1",Validators.required)
    })

  }
  
}

