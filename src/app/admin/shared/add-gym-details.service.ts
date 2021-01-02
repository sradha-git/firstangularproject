import { Injectable } from '@angular/core';
import { AddGymDetails } from './add-gym-details.model';

@Injectable({
  providedIn: 'root'
})
export class AddGymDetailsService {

  formData : AddGymDetails
  constructor() { }
}
