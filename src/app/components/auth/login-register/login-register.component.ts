import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  flag = true
  toggle(){
    if(this.router.url == '/register' ){
      this.flag = false
    }
    else if(this.router.url =='/login'){
      this.flag = true
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.toggle();
    
  }

}
