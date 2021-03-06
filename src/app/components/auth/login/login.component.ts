import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from 'src/app/_service/client.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import {SocketioService} from '../../../_service/socketio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(
    private clientSer: ClientService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService,
    private socketioService: SocketioService
  ) {

  }

  get Email() {
    return this.login.get('email');
  }

  get Pass() {
    return this.login.get('password');
  }

  onSave() {
    if (this.login.invalid) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Please enter the required fields'],
        type: 'danger'
      });
      return;
    }
    this.clientSer.login(this.login.value).subscribe(
      data => {
        
        this.clientSer.setToken(data['token']);
        this.clientSer.changeFlag(true);
        if (this.clientSer.getUserPayload().role === 'sProvider') {
          this.clientSer.changeRole(true);
        }
        else if(this.clientSer.getUserPayload().role === 'superAdmin'){
          this.clientSer.isAdmin(true)
        }
        this.socketioService.setupSocketConnection(this.clientSer.getUserPayload()._id);
        //this.router.navigateByUrl('');
        window.location.href = "http://localhost:4200/"
      },
      err => {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Wrong Email or Password'],
          type: 'danger'
        });
        //console.log(err.error.message);
      }
    );

  }

  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'password': new FormControl('', Validators.required)
    });

    if (this.clientSer.isLoggedIn()) {
      this.router.navigateByUrl('/profile');
    }


  }

}
