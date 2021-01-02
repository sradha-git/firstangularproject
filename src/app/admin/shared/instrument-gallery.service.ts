import { Injectable } from '@angular/core';
import { InstrumentGallery } from './instrument-gallery.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumentGalleryService {
formData:InstrumentGallery
  constructor() { }
}
