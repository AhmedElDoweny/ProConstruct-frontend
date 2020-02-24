import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import { CartServiceService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  @Input() pendingproducts;
  @Input() cart_id;
  cancelpending(post_id){
    for(let i =0;i<this.pendingproducts.length;i++){
            if(this.pendingproducts[i]._id==post_id){
              this.pendingproducts.splice(i,1);
              break;
      
            }
          }
          
    
  }


  constructor(private cartser:CartServiceService) {
  }

  ngOnInit() {
  }

}
