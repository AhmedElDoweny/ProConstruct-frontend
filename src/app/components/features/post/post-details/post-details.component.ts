import {Component, OnInit} from '@angular/core';
import {PostService} from 'src/app/_service/post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from 'src/app/_models/post';
import {Client} from 'src/app/_models/client';
import {ClientService} from 'src/app/_service/client.service';
import {CartServiceService} from 'src/app/_service/cart.service';
import {NotificationService} from '../../../../_service/notification.service';
import {SocketioService} from '../../../../_service/socketio.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  ordered = true;
  loged = false;
  clientid;

  lng = 30.00006;
  lat = 31.335663299999997;

  constructor(private postServ: PostService,
              private aroute: ActivatedRoute,
              private cartservice: CartServiceService,
              private clientservice: ClientService,
              private notificationService: NotificationService,
              private socketioService: SocketioService) {
  }

  postInfo: Post = new Post(1, '', '', '', 1000, '', new Client());

  ngOnInit() {
    this.aroute.params.subscribe(a => {
      this.postServ.getPostDetails(a.id).subscribe(s => {
        this.postInfo = s;
        this.lng = s.location.lng;
        this.lat = s.location.lat;
      });
    });
    this.loged = this.clientservice.isLoggedIn();
    this.clientid = this.clientservice.getUserPayload()._id;
  }

  onOrder(postClient: number) {
    this.ordered = !this.ordered;
    this.sendNotification(postClient);
  }

  sendNotification(sendTo: number) {
    this.notificationService.createNotification({
      title: `New order`,
      content: `${this.postInfo.title} has been ordered`,
      client: sendTo,
      from: this.clientid
    }).subscribe(notification => {
      console.log('sent notification: ', notification);
      this.socketioService.sendNotification({me: this.clientid, someData: notification}, sendTo);
    });
  }

}
