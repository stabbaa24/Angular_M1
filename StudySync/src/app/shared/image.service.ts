import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Image } from '../loggin/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(type: string): Observable<Image[]> {
    return this.http.get<Image[]>(`/api/images/${type}`);
  }
}
