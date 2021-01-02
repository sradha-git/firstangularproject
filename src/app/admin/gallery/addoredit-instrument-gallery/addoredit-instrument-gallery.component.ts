import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InstrumentGalleryService } from '../../shared/instrument-gallery.service';

@Component({
  selector: 'app-addoredit-instrument-gallery',
  templateUrl: './addoredit-instrument-gallery.component.html',
  styleUrls: ['./addoredit-instrument-gallery.component.css']
})
export class AddoreditInstrumentGalleryComponent implements OnInit {

  constructor(public service:InstrumentGalleryService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
      InstrumentId:'',
      InstrumentImage:'',
      InstrumentName:'',
      CreatedDate:'',
      Description:'',
      InstrumentPrice:'',
      ActiveStatus:'',
  }
  }
}
