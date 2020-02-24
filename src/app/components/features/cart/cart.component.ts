import { ClientService } from 'src/app/_service/client.service';
import {Component, OnInit} from '@angular/core';
import {CartServiceService} from 'src/app/_service/cart.service';
import {ActivatedRoute} from '@angular/router';
import {Cart} from 'src/app/_models/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  completedFlag = false;
  rejectedFlag = false;
  pendingFlag = true;

  showrejected() {
    this.rejectedFlag = true;
    this.pendingFlag = false;
    this.completedFlag = false;
  }

  showrcompleted() {
    this.rejectedFlag = false;
    this.pendingFlag = false;
    this.completedFlag = true;
  }

  showrpending() {
    this.rejectedFlag = false;
    this.pendingFlag = true;
    this.completedFlag = false;
  }

  constructor(private cartservice: CartServiceService, private arote: ActivatedRoute, private clientservice:ClientService) {
  }

  newcart: Cart;


  ngOnInit() {
    let cart_id = this.clientservice.getUserPayload().cart;
    this.cartservice.getCart(cart_id).subscribe(c => {
      this.newcart = c;
      console.log('c', c);

    });
  }

}
