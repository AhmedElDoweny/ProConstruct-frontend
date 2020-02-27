import {Router} from '@angular/router';
import {ClientService} from './../../../_service/client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-reset-pw',
  templateUrl: './reset-pw.component.html',
  styleUrls: ['./reset-pw.component.css']
})
export class ResetPwComponent implements OnInit {
  resetPw: FormGroup;

  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private clientSer: ClientService,
    private router: Router) {
  }

  get Pass() {
    return this.resetPw.get('password');
  }

  onSave() {
    if (this.resetPw.invalid) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Please enter the required fields'],
        type: 'danger'
      });
      return;
    }
    this.clientSer.resetPw(this.resetPw.value, this.router.url.split('/')[2]).subscribe(
      (data) => this.router.navigateByUrl('/login', {replaceUrl:true}),
      (err) => console.log(err)
    );

  }

  ngOnInit() {
    let token = this.router.url.split('/')[2].split('.')[1];

    // const userPayload = atob(this.router.url.split("/")[2].split('.')[1]);
    //  let  email = JSON.parse(userPayload);
    // console.log(userPayload)
    // if(!userPayload){

    //   this.router.navigateByUrl("/login")
    // }
    if (!token) {
      this.router.navigateByUrl('/login');
    }

    this.resetPw = new FormGroup({
      'password': new FormControl('', [Validators.required, Validators.pattern(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$`)]),
    });


  }

}
