import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Notification} from '../_models/notification';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationArr: ReplaySubject<Notification>;
  private baseurl = 'http://localhost:8080/notification';

  constructor(private http: HttpClient) {
    this.notificationArr = new ReplaySubject<Notification>(1);
  }

  getAllNottifications(clientId) {
    return this.http.get<Notification[]>(`${this.baseurl}/${clientId}`);
  }

  createNotification(notBody: { title: string, content: string, client: number, from: number }) {
    return this.http.post<Notification>(this.baseurl, notBody);
  }

  updateNotificationArr(notification: Notification) {
    this.notificationArr.next(notification);
  }
}
