import { Injectable } from '@angular/core';
import { Activity } from './activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
formData:Activity
  constructor() { }
}
