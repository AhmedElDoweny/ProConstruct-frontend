import {ClientService} from 'src/app/_service/client.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {PostService} from 'src/app/_service/post.service';
import {Router} from '@angular/router';
import {Post} from 'src/app/_models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  lng = 31.035738300000002;
  lat = 31.335663299999997;
  locationChoosen = true;
  imgpreview: string;
  position: string;
  clientId: any;

  // posts:Post[]=[];
  addPostForm: FormGroup;
  map = false;

  showMap() {
    return this.map = true;
  }

  get img() {
    return this.addPostForm.get('image');
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addPostForm.patchValue({
      image: file
    });
    this.addPostForm.get('image').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imgpreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  saveLocation() {
    this.position = `{"lng": ${this.lng}, "lat": ${this.lat}}`;
    this.addPostForm.patchValue({location: this.position});
    return this.map = false;
  }

  selectLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChoosen = true;
  }

  constructor(private postServ: PostService,
              private router: Router,
              private clientSer: ClientService
  ) {
  }


  getLocation() {  // current location by browser
    navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.position = `{"lng": ${this.lng}, "lat": ${this.lat}}`;
        this.addPostForm.patchValue({location: this.position});
      }
      // function success(position) {
      //   const lat = position.coords.latitude;
      //   const lng = position.coords.longitude;}

    );
  }

  ngOnInit() {
    this.clientId = this.clientSer.getUserPayload()._id;
    this.addPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl(1000, Validators.required),
      image: new FormControl(null, Validators.required),
      client: new FormControl(this.clientId, Validators.required),
      location: new FormControl(null)
    });

  }

  addPostt() {
    this.postServ.addpost(this.addPostForm.value).subscribe(a => {
      this.router.navigate(['/posts']);
    }, error => {
      console.log('error: ', error);
    });
  }
}

