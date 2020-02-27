import {NotificationService} from './../../../_service/notification.service';
import {Component, OnInit} from '@angular/core';
import {Notification} from 'src/app/_models/notification';
import {ClientService} from '../../../_service/client.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[];
  notificationFlag: boolean;

  constructor(private notifservice: NotificationService, private clientService: ClientService) {
  }

  ngOnInit() {
    this.notifservice.getAllNottifications(this.clientService.getUserPayload()._id).subscribe(notif => {
      console.log(notif);
      this.notifications = notif;
      this.notificationFlag = this.checkUnseenNotification();
      console.log(this.notificationFlag);
    });

    this.notifservice.notificationArr.subscribe((notification) => {
      console.log('notifications before update: ', this.notifications);
      console.log('received notification: ', notification, typeof (notification));
      this.notifications.push(notification);
      this.notificationFlag = this.checkUnseenNotification();
      console.log('notifications after update: ', this.notifications, 'recived notification ', notification);
    });
  }

  checkUnseenNotification() {
    if (this.notifications === undefined) {
      return false;
    }
    for (const notification of this.notifications) {
      if (notification.isseen === false) {
        return true;
      }
    }
  }

  onSeeNotification() {
    for (const notification of this.notifications) {
      notification.isseen = true;
      this.notificationFlag = this.checkUnseenNotification();
    }
  }
}
