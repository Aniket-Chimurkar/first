import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Users } from './User';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ=="

  getUsers(){
    return this.http.get<Users[]>(this.url);
  }

}
