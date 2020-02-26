import {Router} from '@angular/router';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ClientService} from 'src/app/_service/client.service';
import {Client} from 'src/app/_models/client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ProfileComponent implements OnInit {
  client = new Client(1, '', '', '', '', '', '');

  constructor(private clientSer: ClientService, private router: Router) {
  }

  onLogout() {
    this.clientSer.removeToken();
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.clientSer.getClient().subscribe(data => {
        this.client = data;

      },
      error => console.log(error.error.message));

  }

}
