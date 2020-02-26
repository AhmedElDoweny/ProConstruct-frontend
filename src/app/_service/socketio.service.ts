import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  notificationFlag: ReplaySubject<boolean>;
  socket;
  private endPoint = 'http://localhost:8080';

  constructor() {
    this.notificationFlag = new ReplaySubject<boolean>(1);
  }

  setupSocketConnection(clientId) {
    this.socket = io(this.endPoint);
    this.socket.emit('creat socket id', clientId);
  }

  sendNotification(data: {}, to: number) {
    this.socket.emit('send notification', {data, to});
  }

  changeNotificationFlag() {
    this.notificationFlag.next(true);
  }
}
