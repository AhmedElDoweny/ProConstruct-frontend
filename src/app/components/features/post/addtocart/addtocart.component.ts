import {Component, OnInit, Input} from '@angular/core';
import {PostService} from 'src/app/_service/post.service';
import {Router} from '@angular/router';
import {CartServiceService} from 'src/app/_service/cart.service';
import {ClientService} from 'src/app/_service/client.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  @Input() _post_id;
  cartId = this.clientservice.getUserPayload().cart;

  addtocart(post_id) {
    console.log('cartid', this.clientservice.getUserPayload().cart);

    this.cartservice.addposttocart(this.cartId, post_id).subscribe((addedpost) => {
      console.log('addedpost', addedpost);
    });

  }

  constructor(
    private postServ: PostService,
    private router: Router,
    private cartservice: CartServiceService,
    private clientservice: ClientService
  ) {
  }

  ngOnInit() {
  }

}
