import { Injectable } from '@angular/core';
import { FitnessCategory } from './fitness-category.model';

@Injectable({
  providedIn: 'root'
})
export class FitnessCategoryService {
  formData : FitnessCategory

  constructor() { }
}
