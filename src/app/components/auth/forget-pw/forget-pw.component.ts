import {ClientService} from 'src/app/_service/client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.css']
})
export class ForgetPwComponent implements OnInit {
  disable: boolean = false;
  forgetPw: FormGroup;

  constructor(
    private ngFlashMessageService: NgFlashMessageService,
    private clientSer: ClientService
  ) {
  }

  get Email() {
    return this.forgetPw.get('email');
  }

  onSave() {
    if (this.forgetPw.invalid) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Please enter your email'],
        type: 'danger'
      });
      return;
    }
    // console.log(this.forgetPw.value);
    this.clientSer.forgetPw(this.forgetPw.value).subscribe(data => {
      this.disable = true;
    this.ngFlashMessageService.showFlashMessage({
      messages: ['Please check your email to reset password'],
      type: 'success'
    });
    setTimeout(() => {
      this.disable = false;
    }, 50000);;

    }, err => {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Wrong Email'],
        type: 'danger'
      });
    });
    // this.disable = true;
    // this.ngFlashMessageService.showFlashMessage({
    //   messages: ['Please check your email to reset password'],
    //   type: 'success'
    // });
    // setTimeout(() => {
    //   this.disable = false;
    // }, 50000);
  }

  ngOnInit() {
    this.forgetPw = new FormGroup({
      'email': new FormControl(null, [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])
    });
  }

}
