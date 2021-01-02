import { Injectable } from '@angular/core';
import { AddPersonalTraining } from './add-personal-training.model';

@Injectable({
  providedIn: 'root'
})
export class AddPersonalTrainingService {
formData : AddPersonalTraining
  constructor() { }
}
