import {NotificationService} from './../../../_service/notification.service';
import {Component, OnInit} from '@angular/core';
import {Notification} from 'src/app/_models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[];
  seen = false;

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
  constructor(private notifservice: NotificationService) {
  }

  ngOnInit() {
    this.notifservice.getAllNottifications().subscribe(notif => {
      console.log(notif);
      this.notifications = notif;
    });

    this.notifservice.notificationArr.subscribe((notification: Notification) => {
      console.log('notifications before update: ', this.notifications);
      console.log('received notification: ', notification, typeof (notification));
      this.notifications.push(notification);
      console.log('notifications after update: ', this.notifications, 'recived notification ', notification);
    });
  }

}
