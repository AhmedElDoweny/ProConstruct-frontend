import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../_models/post';

// import {Post} from '../_models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostDetails(id: number) {
    return this.http.get<Post>(this.baseUrl + '/' + id);
  }

  // addpost(posTitle: string, posCategory: string, posDescription: string,
  //         posPrice: string, posImage: File, posClient: string) {
  //   const formData = new FormData();
  //   formData.append('title', posTitle);
  //   formData.append('category', posCategory);
  //   formData.append('description', posDescription);
  //   formData.append('price', posPrice);
  //   formData.append('image', posImage);
  //   formData.append('client', posClient);

  //   return this.http.post(this.baseUrl, formData);
  // }


  addpost(post) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('description', post.description);
    formData.append('price', post.price);
    formData.append('image', post.image);
    formData.append('client', post.client);
    formData.append('location', post.location);
    return this.http.post(this.baseUrl, formData);
  }


}
