import { ClientService } from './../../../_service/client.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DashboardComponent implements OnInit {

  constructor(
    private clientSer:ClientService ,
    private router:Router) { }

  ngOnInit() {
    if(this.clientSer.getUserPayload().role !== "superAdmin"){
      this.router.navigateByUrl('')
    }
    
  }

}
