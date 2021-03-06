import {Component, OnInit} from '@angular/core';
import {SocketioService} from './_service/socketio.service';
import {ClientService} from './_service/client.service';
import {NotificationService} from './_service/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProConstruct-frontend';
  private payload;

  constructor(
    private socketioService: SocketioService,
    private clientService: ClientService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {

    if (this.clientService.isLoggedIn()) {
      this.payload = this.clientService.getUserPayload();
      this.socketioService.setupSocketConnection(this.payload._id);

      this.socketioService.socket.on('receive notification', data => {
        this.socketioService.changeNotificationFlag();
        this.notificationService.updateNotificationArr(data.someData);
      });
    }

  }

  // sendNotification() {
  //   const sendTo = 4;
  //   this.notificationService.createNotification({title: 'test', content: 'test content', client: sendTo}).subscribe(notification => {
  //     console.log('sent notification: ', notification);
  //     this.socketioService.sendNotification({me: this.payload._id, someData: notification}, sendTo);
  //   });
  // }
}
