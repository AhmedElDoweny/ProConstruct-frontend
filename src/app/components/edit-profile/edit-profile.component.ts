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

  constructor(private clientSer: ClientService, private router: Router) {
  }

  onSave() {
    this.clientSer.editClient(this.editClientInfo.value).subscribe(data => {
      console.log(data);
    });

    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
    // this.clientSer.getClient().subscribe(
    //   data => this.clientInfo = data,
    //   err => console.log(err.error.message));
    this.editClientInfo = new FormGroup({
      'name': new FormControl('', Validators.required),
      'phone': new FormControl('', Validators.required),
      'role': new FormControl('', Validators.required)
    });

    this.clientInfo = this.clientSer.getClient().pipe(tap(user => {
      this.editClientInfo.patchValue(user);
    }));


  }

}
