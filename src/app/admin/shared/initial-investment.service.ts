import { Injectable } from '@angular/core';
import { InitialInvestmet } from './initial-investmet.model';

@Injectable({
  providedIn: 'root'
})
export class InitialInvestmentService {
  formData:InitialInvestmet

  constructor() { }
}
