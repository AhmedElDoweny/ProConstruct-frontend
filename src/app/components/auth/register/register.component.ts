import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../_service/client.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgFlashMessageService} from 'ng-flash-messages'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  get Name(){
    return this.register.get('name')
  }
  get Email(){
    return this.register.get('email')
  }
  get Password(){
    return this.register.get('password')
  }
  get Phone(){
    return this.register.get('phone')
  }
  get Role(){
    return this.register.get('role')
  }



  onSave() {
    console.log(this.register.value);
    this.clientSer.addClient(this.register.value).subscribe(
      data => {
        this.clientSer.setToken(data['token']);
        this.router.navigateByUrl('/profile');
        this.clientSer.changeFlag(true)
      },
      err => {
        if(err.error.length == 1){
          this.NgFlashMessageService.showFlashMessage({
            messages:[`${err.error[0]}`],
            type : "danger"
          })
        }
        else { 
        this.NgFlashMessageService.showFlashMessage({
          messages:[`Please enter the required fields`],
          type : "danger"
        })}
      }
    );
  }

  constructor(
    private clientSer: ClientService,
    private router: Router,
    private NgFlashMessageService: NgFlashMessageService)
    {}

  ngOnInit() {

    this.register = new FormGroup({
      //"_id": new FormControl(9,Validators.required),  ^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
      'name': new FormControl('', [Validators.required,Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`)]),
      'password': new FormControl('', [Validators.required, Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$`)]),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(`^[0][1][012][0-9]{8}$`)]),
      'role': new FormControl('', Validators.required)
    });
    if (this.clientSer.isLoggedIn()) {
      this.router.navigateByUrl('/profile');
    }
    ;
  }

}
