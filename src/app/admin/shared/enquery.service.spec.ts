import { TestBed } from '@angular/core/testing';

import { EnqueryService } from './enquery.service';

describe('EnqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnqueryService = TestBed.get(EnqueryService);
    expect(service).toBeTruthy();
  });
});
