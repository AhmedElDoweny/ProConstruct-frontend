import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from '../_models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseurl:string = "http://localhost:8080/notification";
  getAllNottifications(){
    return this.http.get<Notification[]>(this.baseurl)
  }

  constructor( private http:HttpClient) { }
}
