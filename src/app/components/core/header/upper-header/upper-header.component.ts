import {ClientService} from './../../../../_service/client.service';
import {Component, OnInit, SimpleChange, OnChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upper-header',
  templateUrl: './upper-header.component.html',
  styleUrls: ['./upper-header.component.css']
})
export class UpperHeaderComponent implements OnInit {
  flag: boolean;
  clientName: string;
  date = new Date().toLocaleString();
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
    this.router.navigateByUrl('');
  }

  constructor(private clientSer: ClientService, private router: Router) {
  }

  ngOnInit() {
    this.toggle();
    this.clientSer.changeF.subscribe(status => this.flag = status);

    if (this.clientSer.isLoggedIn()) {
      const clientPayload = this.clientSer.getUserPayload();
      this.clientName = clientPayload.name;
      console.log(this.clientName);
    }
  }
}
