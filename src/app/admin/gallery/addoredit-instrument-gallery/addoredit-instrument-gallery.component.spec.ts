import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditInstrumentGalleryComponent } from './addoredit-instrument-gallery.component';

describe('AddoreditInstrumentGalleryComponent', () => {
  let component: AddoreditInstrumentGalleryComponent;
  let fixture: ComponentFixture<AddoreditInstrumentGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoreditInstrumentGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoreditInstrumentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
