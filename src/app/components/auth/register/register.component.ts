import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../_service/client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;

  onSave(){
    console.log(this.register.value)
    this.clientSer.addClient(this.register.value).subscribe()
  }

  constructor(private clientSer:ClientService) { }

  ngOnInit() {
    this.register = new FormGroup({
      "_id": new FormControl(20,Validators.required),
      "name": new FormControl("", Validators.required),
      "password": new FormControl("",Validators.required),
      "email": new FormControl('',Validators.required),
      "phone": new FormControl("",Validators.required),
      "role": new FormControl("Engineer", Validators.required)
    })
  }

}
