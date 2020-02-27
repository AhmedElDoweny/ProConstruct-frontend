import { ClientService } from 'src/app/_service/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
allUsers
  constructor(private clientSer :ClientService) { }
  onDelete(id){
    this.clientSer.deleteClient(id).subscribe(
      data => {console.log(data)
        this.clientSer.getAllClient().subscribe(
          data => this.allUsers = data,
          error => console.log(error)
        )
      },
      error => console.log(error)
    )
  }

  ngOnInit() {
    this.clientSer.getAllClient().subscribe(
      data => this.allUsers = data,
      error => console.log(error)
    )
  }

}
