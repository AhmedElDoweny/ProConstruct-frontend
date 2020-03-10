import {NotificationService} from './../../../_service/notification.service';
import {Component, OnInit} from '@angular/core';
import {Notification} from 'src/app/_models/notification';
import {ClientService} from '../../../_service/client.service';
import {SocketioService} from '../../../_service/socketio.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[];
  notificationFlag: boolean;
  role: string;
  isDisabled = false;

  constructor(
    private notifservice: NotificationService,
    private clientService: ClientService,
    private socketioService: SocketioService) {
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
      console.log('received notification: ', notification);
      // this.notifications.push(notification);
      this.notificationFlag = this.checkUnseenNotification();
      console.log('notifications after update: ', this.notifications, 'recived notification ', notification);
    });

    this.role = this.clientService.getUserPayload().role;
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
    this.notifservice.getAllNottifications(this.clientService.getUserPayload()._id)
      .subscribe(notifications => this.notifications = notifications);
    for (const notification of this.notifications) {
      notification.isseen = true;
      this.notificationFlag = this.checkUnseenNotification();
    }
  }

  orderResponse(status, postTitle, sendTo, sentFrom) {
    this.isDisabled = true;
    this.notifservice.createNotification({
      title: `Response`,
      content: `Your request for ${postTitle} has been ${status}`,
      client: sendTo,
      from: sentFrom
    }).subscribe(notification => {
      console.log('sent notification: ', notification);
      this.socketioService.sendNotification({me: sentFrom, someData: notification}, sendTo);
    });
  }
}
