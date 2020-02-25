import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Notification} from '../_models/notification';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseurl = 'http://localhost:8080/notification';
  notificationArr: ReplaySubject<Notification>;

  getAllNottifications() {
    return this.http.get<Notification[]>(this.baseurl);
  }

  createNotification(notBody: { title: string, content: string, client: number }) {
    return this.http.post<Notification>(this.baseurl, notBody);
  }

  updateNotificationArr(notification: Notification) {
    this.notificationArr.next(notification);
  }

  constructor(private http: HttpClient) {
    this.notificationArr = new ReplaySubject<Notification>(1);
  }
}
