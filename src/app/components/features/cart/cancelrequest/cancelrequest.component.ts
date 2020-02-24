import { ClientService } from 'src/app/_service/client.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-cancelrequest',
  templateUrl: './cancelrequest.component.html',
  styleUrls: ['./cancelrequest.component.css']
})
export class CancelrequestComponent implements OnInit {
  // @Input() cart_id;
  @Input() item_id;
  cartId = this.clientservice.getUserPayload().cart


  cancelPost(post_id){
    if(confirm(`Are You Sure ?`)){
      this.cartser.cancelrequest(this.cartId,post_id).subscribe(canceles=>{
        console.log("canceles",canceles);
      })
    }
  }

  constructor(private cartser:CartServiceService,private clientservice:ClientService) { }

  ngOnInit() {
  }

}
