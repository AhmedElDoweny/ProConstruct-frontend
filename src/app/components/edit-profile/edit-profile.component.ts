import { NgFlashMessageService } from 'ng-flash-messages';
import {tap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClientService} from './../../_service/client.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EditProfileComponent implements OnInit {
  clientInfo;

  editClientInfo: FormGroup;

  constructor(
    private clientSer: ClientService,
     private router: Router,
     private NgFlashMessageService:NgFlashMessageService) {
  }

  // get Name() {
  //   return this.editClientInfo.get('name');
  // }

  // get Email() {
  //   return this.editClientInfo.get('email');
  // }
  // get Phone() {
  //   return this.editClientInfo.get('phone');
  // }

  onSave() {
    this.clientSer.editClient(this.editClientInfo.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/profile');
    },
    err => {
      if (err.error.length === 1) {
        this.NgFlashMessageService.showFlashMessage({
          messages: [`${err.error[0]}`],
          type: 'danger'
        });
      };

    
    })}

  ngOnInit() {
    // this.clientSer.getClient().subscribe(
    //   data => this.clientInfo = data,
    //   err => console.log(err.error.message));
    this.editClientInfo = new FormGroup({
      'name': new FormControl('',  [Validators.required, Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`)]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(`^[0][1][012][0-9]{8}$`)]),
      'email': new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    });

    this.clientInfo = this.clientSer.getClient().pipe(tap(user => {
      this.editClientInfo.patchValue(user);
    }));


  }

}
