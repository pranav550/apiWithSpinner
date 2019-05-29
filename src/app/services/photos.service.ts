import { Photos } from './../models/photos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  apiURL: string = 'https://gorest.co.in/public-api/photos?_format=json&access-token=gMlDvl9wiUl18q6nMWBbALUEwjQTCpUpqD6J';
  constructor(private httpClient: HttpClient) { }

  getPhotos():Observable<any>{
    
    return this.httpClient.get<Photos[]>(this.apiURL);
  }
}
