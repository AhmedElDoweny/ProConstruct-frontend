import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private Url: string = 'http://localhost/8080/client'
  addClient(client){
    return this.http.post<any>(this.Url,client)
  }
  constructor(private http: HttpClient) { 
    
  }
}
