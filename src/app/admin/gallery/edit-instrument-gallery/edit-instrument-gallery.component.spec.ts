import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstrumentGalleryComponent } from './edit-instrument-gallery.component';

describe('EditInstrumentGalleryComponent', () => {
  let component: EditInstrumentGalleryComponent;
  let fixture: ComponentFixture<EditInstrumentGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstrumentGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstrumentGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
