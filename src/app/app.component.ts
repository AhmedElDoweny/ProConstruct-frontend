import {Component, OnInit} from '@angular/core';
import {SocketioService} from './_service/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProConstruct-frontend';

  constructor(private socketioService: SocketioService) {
  }

  ngOnInit(): void {
    this.socketioService.setupSocketConnection();
    console.log('socket should be connected');
  }
}
