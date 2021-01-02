import { Injectable } from '@angular/core';
import { Staff } from './staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
formData:Staff
  constructor() { }
}
