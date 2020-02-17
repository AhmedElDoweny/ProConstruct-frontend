import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../_service/client.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  onSave() {
    console.log(this.register.value);
    this.clientSer.addClient(this.register.value).subscribe(
      data => {
        this.clientSer.setToken(data['token']);
        this.router.navigateByUrl('/profile');
      },
      err => {
        console.log(err.error.message);
      }
    );

  }

  constructor(private clientSer: ClientService, private router: Router) {
  }

  ngOnInit() {

    this.register = new FormGroup({
      //"_id": new FormControl(9,Validators.required),
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'phone': new FormControl('', Validators.required),
      'role': new FormControl('Engineer', Validators.required)
    });
    if (this.clientSer.isLoggedIn()) {
      this.router.navigateByUrl('/profile');
    }
    ;
  }

}
