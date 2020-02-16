import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from 'src/app/_models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private baseurl = 'http://localhost:8080/cart';

  getCart(_id: number) {
    return this.http.get<Cart>(this.baseurl + '/' + _id);
  }

  getAllCarts() {
    return this.http.get<Cart[]>(this.baseurl);
  }

  constructor(private http: HttpClient) {
  }
}
