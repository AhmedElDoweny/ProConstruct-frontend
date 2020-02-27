import {ClientService} from './../../../../_service/client.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SocketioService} from '../../../../_service/socketio.service';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.css']
})
export class UpperHeaderComponent implements OnInit {
  flag: boolean;
  clientName: string;
  notificationFlag: boolean;

  constructor(
    private clientSer: ClientService,
    private socketioService: SocketioService,
    private router: Router) {
  }

  toggle() {
    if (this.clientSer.isLoggedIn()) {
      this.flag = true;
    } else {
      this.clientSer.changeFlag(false);
      this.flag = false;
    }
  }

  logOut() {
    this.clientSer.removeToken();
    this.toggle();
    this.clientSer.changeRole(false);
    this.clientSer.isAdmin(false);
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.toggle();
    this.clientSer.changeF.subscribe(status => this.flag = status);

    if (this.clientSer.isLoggedIn()) {
      this.socketioService.notificationFlag.subscribe(status => this.notificationFlag = status);
      const clientPayload = this.clientSer.getUserPayload();
      this.clientName = clientPayload.name;
      console.log(this.clientName);
    }
  }
}
