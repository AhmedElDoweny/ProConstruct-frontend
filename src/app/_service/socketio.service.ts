import {Injectable, OnInit} from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private endPoint = 'http://localhost:8080';
  socket;

  constructor() {
  }

  setupSocketConnection(clientId) {
    this.socket = io(this.endPoint);
    this.socket.emit('creat socket id', clientId);
  }

  sendNotification(data: {}, to: number) {
    this.socket.emit('send notification', {data: data, to: to});
  }
}
