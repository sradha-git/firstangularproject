import { TestBed } from '@angular/core/testing';

import { AddGymDetailsService } from './add-gym-details.service';

describe('AddGymDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddGymDetailsService = TestBed.get(AddGymDetailsService);
    expect(service).toBeTruthy();
  });
});
