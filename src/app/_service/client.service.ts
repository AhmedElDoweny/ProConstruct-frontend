import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  changeF: ReplaySubject<boolean>;

  private Url: string = 'http://localhost:8080/client';
  private authUrl: string = 'http://localhost:8080/login';
  noAuthHeader = {headers: new HttpHeaders({'NoAuth': 'True'})};

  addClient(client) {
    return this.http.post<any>(this.Url, client);
  }

  getClient() {
    return this.http.get(this.Url);
  }

  editClient(client) {
    return this.http.patch(this.Url, {edit: client});
  }

  login(params) {
    console.log(params);
    return this.http.post(this.authUrl, params, this.noAuthHeader);
  }

  changeFlag(status: boolean) {
    this.changeF.next(status);
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    let token = this.getToken();
    if (token) {
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    let userPayload = this.getUserPayload();
    if (userPayload) {
      return (userPayload.exp > (Date.now() / 1000));
    } else {
      return false;
    }

  }


  constructor(private http: HttpClient) {
    this.changeF = new ReplaySubject<boolean>(1);
  }
}
