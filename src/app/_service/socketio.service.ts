import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private endPoint = 'http://localhost:8080';
  socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io(this.endPoint);
    console.log('from socket setup method');
  }
}
