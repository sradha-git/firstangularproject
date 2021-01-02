import { TestBed } from '@angular/core/testing';

import { InitialInvestmentService } from './initial-investment.service';

describe('InitialInvestmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitialInvestmentService = TestBed.get(InitialInvestmentService);
    expect(service).toBeTruthy();
  });
});
