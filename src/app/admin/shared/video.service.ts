import { Injectable } from '@angular/core';
import { Video } from './video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
formData:Video
  constructor() { }
}
