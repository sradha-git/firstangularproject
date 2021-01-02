import { TestBed } from '@angular/core/testing';

import { FitnessCategoryService } from './fitness-category.service';

describe('FitnessCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FitnessCategoryService = TestBed.get(FitnessCategoryService);
    expect(service).toBeTruthy();
  });
});
