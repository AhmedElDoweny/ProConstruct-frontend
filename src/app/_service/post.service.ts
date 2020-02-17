import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../_models/post';

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
}
