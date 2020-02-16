import { NotificationService } from './../../../_service/notification.service';
import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/_models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications:Notification[]=[];
  seen:boolean=false;

  // notifications=[
  //   {title:"Your request to rent equipment1 has been approved",
  //   content:"Your request to rent equipment1 has been approved,now you can keep in touch with the owner",
  //   isseen:false,
  //   isread:true},
  //   {title:"Your request to rent equipment2 has been rejected",
  //   content:"Your request to rent equipment2 has been rejected,unfortunately this equipment not available",
  //   isseen:false,
  //   isread:false},
  //   {title:"Your request to rent equipment3 has been approved",
  //   content:"Your request to rent equipment3 has been approved,now you can keep in touch with the owner",
  //   isseen:false,
  //   isread:false},
  // ]
  constructor(private notifservice:NotificationService) { }

  ngOnInit() {
    this.notifservice.getAllNottifications().subscribe(notif=>{
      console.log(notif);
      this.notifications=notif;
    })
  }

}
