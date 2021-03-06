import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from 'src/app/_models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private baseurl = 'http://localhost:8080/cart';

  constructor(private http: HttpClient) {
  }

  getCart(_id: number) {
    return this.http.get<Cart>(this.baseurl + '/' + _id);
  }

  getAllCarts() {
    return this.http.get<Cart[]>(this.baseurl);
  }

  cancelrequest(_id: number, post_id) {
    console.log(_id, 'patched', post_id);

    return this.http.patch(this.baseurl + '/' + _id, {
      pull: true,
      _id: post_id

    });
  }

  addposttocart(_id: number, post_id) {
    console.log(_id, 'patched', post_id);
    return this.http.patch(this.baseurl + '/' + _id, {
      push: true,
      post_id: post_id

    });

  }
}
