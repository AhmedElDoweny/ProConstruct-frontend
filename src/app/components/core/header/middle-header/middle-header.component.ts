import {ClientService} from 'src/app/_service/client.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.css']
})
export class MiddleHeaderComponent implements OnInit {
  @ViewChild('mobileUl', {static: true}) moblieUl: ElementRef;
  @ViewChild('mobileNestedUl', {static: true}) mobileNestedUl: ElementRef;

  isLogged: boolean;
  role: boolean;
  r: string;
  cartPath: string;

  constructor(private clientSer: ClientService) {
    // if (this.r === 'sprovider') {
    //   this.role = true;
    // } else {
    //   this.role = false;
    // }
  }

  ngOnInit() {

    if (this.isLogged) {
      this.r = this.clientSer.getUserPayload().role;
      this.isLogged = this.clientSer.isLoggedIn();
      this.clientSer.changeR.subscribe(state => {
        this.role = state;
      });
    }
    this.role = this.r === 'sProvider';
    this.clientSer.changeF.subscribe(status => {
      this.isLogged = status;
    });

    if (this.isLogged) {
      const clientPayload = this.clientSer.getUserPayload();
      this.cartPath = `cart/${clientPayload.cart}`;
    }
  }

  changeMobileUl() {
    if (this.moblieUl.nativeElement.style.cssText === 'display: none;') {
      this.moblieUl.nativeElement.style.cssText = 'display: block;';
    } else {
      this.moblieUl.nativeElement.style.cssText = 'display: none;';
    }
  }

  changeMobileNestedUl() {
    if (this.mobileNestedUl.nativeElement.style.cssText === 'display: none;') {
      this.mobileNestedUl.nativeElement.style.cssText = 'display: block;';
    } else {
      this.mobileNestedUl.nativeElement.style.cssText = 'display: none;';
    }
  }
}
