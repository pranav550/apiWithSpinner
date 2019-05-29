import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://gorest.co.in/public-api/users?_format=json&access-token=gMlDvl9wiUl18q6nMWBbALUEwjQTCpUpqD6J';
  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<any>{
    
    return this.httpClient.get<User[]>(this.apiURL);
  }
}
