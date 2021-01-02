import { Injectable } from '@angular/core';
import { OwnerDetails } from './owner-details.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerDetailsService {
formData:OwnerDetails
  constructor() { }
}
