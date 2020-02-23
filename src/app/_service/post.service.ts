import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../_models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl: string = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {
  }

  getAllPosts() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  getPostDetails(id: number) {
    return this.http.get<Post>(this.baseUrl + '/' + id);
  }

  // addPost(postt:Post){
  //   return this.http.post<Post>(this.baseUrl,postt);
  // }

  addpost(posTitle:string,posCategory:string,posDescription:string,
          posPrice:string,posImage:File,posClient:string){
            var formData = new FormData();            
            formData.append("title",posTitle);
            formData.append("category",posCategory);
            formData.append("description",posDescription);
            formData.append("price",posPrice);
            formData.append("image",posImage);
            formData.append("client",posClient);

            return this.http.post(this.baseUrl,formData);
  }


}
