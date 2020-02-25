import {Component, OnInit} from '@angular/core';
import {SocketioService} from './_service/socketio.service';
import {ClientService} from './_service/client.service';


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
    private clientService: ClientService
  ) {
  }

  ngOnInit(): void {

    if (this.clientService.isLoggedIn()) {
      this.payload = this.clientService.getUserPayload();
      this.socketioService.setupSocketConnection(this.payload._id);

      this.socketioService.socket.on('receive notification', d => {
        this.socketioService.changeNotificationFlag();
        console.log(d);
        console.log('received something');
      });
    }

  }

  sendNotification() {
    this.socketioService.sendNotification({me: this.payload._id, someData: 'lol'}, 4);
  }
}
