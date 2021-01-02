import { Injectable } from '@angular/core';
import { Admission } from './admission.model';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
formData: Admission
  constructor() { }
}
