import {Component, Input, OnInit} from '@angular/core';
import {CartServiceService} from 'src/app/_service/cart.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  @Input() pendingproducts;
  @Input() cart_id;

  constructor(private cartser: CartServiceService) {
  }

  cancelpending(post_id) {
    for (let i = 0; i < this.pendingproducts.length; i++) {
      if (this.pendingproducts[i]._id == post_id) {
        this.pendingproducts.splice(i, 1);
        break;

      }
    }


  }

  ngOnInit() {
  }

}
