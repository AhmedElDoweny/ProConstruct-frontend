import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from 'src/app/_service/client.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ProfileComponent implements OnInit {
  client;
  onLogout(){
    this.clientSer.removeToken()
    this.router.navigateByUrl('');
  }
  constructor(private clientSer:ClientService, private router:Router) { }

  ngOnInit() {
    this.clientSer.getClient().subscribe(data => {this.client = data},
      error => console.log(error.error.message))
  }

}
