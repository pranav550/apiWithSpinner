import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos=[]
  constructor(private photosService:PhotosService) {}

  ngOnInit() {
    console.log("ffffff");
    this.photosService.getPhotos().subscribe(
      res =>{
        this.photos = res['result'];
        console.log(this.photos,"xxxxxxx");
        // console.log(res,"xxxxxxx");
      });  
  }
}
