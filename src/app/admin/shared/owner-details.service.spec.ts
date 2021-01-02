import { TestBed } from '@angular/core/testing';

import { OwnerDetailsService } from './owner-details.service';

describe('OwnerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwnerDetailsService = TestBed.get(OwnerDetailsService);
    expect(service).toBeTruthy();
  });
});
