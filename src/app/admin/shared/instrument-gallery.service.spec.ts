import { TestBed } from '@angular/core/testing';

import { InstrumentGalleryService } from './instrument-gallery.service';

describe('InstrumentGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentGalleryService = TestBed.get(InstrumentGalleryService);
    expect(service).toBeTruthy();
  });
});
