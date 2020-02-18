import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ClientService} from 'src/app/_service/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  onSave() {
    this.clientSer.login(this.login.value).subscribe(
      data => {
        this.clientSer.setToken(data['token']);
        this.clientSer.changeFlag();
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
    this.login = new FormGroup({
      'email': new FormControl('', Validators.email),
      'password': new FormControl('', Validators.required)
    });

    if (this.clientSer.isLoggedIn()) {
      this.router.navigateByUrl('/profile');
    }
    ;

  }

}
