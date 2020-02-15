import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cart} from '../_models/cart';
import {Observable} from 'rxjs';
import {Setting} from '../_models/setting';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private baseUrl = 'http://localhost:8080/setting';

  constructor(private http: HttpClient) {
  }

  /**
   * GET any field from setting document
   *
   * @param select  The selected field.
   *
   * @return An `Observable` string.
   */

  getAnyField(select: string): Observable<Setting> {
    return this.http.get<Setting>(`${this.baseUrl}/${select}`);
  }

  addNewsLetterEmail(email: string) {
    return this.http.put(this.baseUrl, {
      push: {
        newsLetterEmails: email
      }
    });
  }

  addContactUsMessages(message: {
    id: number,
    name: string,
    email: string,
    subject: string,
    message: string
  }) {
    return this.http.put(this.baseUrl, {push: {contactUsMessages: message}});
  }
}
