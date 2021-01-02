import { TestBed } from '@angular/core/testing';

import { AddPersonalTrainingService } from './add-personal-training.service';

describe('AddPersonalTrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPersonalTrainingService = TestBed.get(AddPersonalTrainingService);
    expect(service).toBeTruthy();
  });
});
