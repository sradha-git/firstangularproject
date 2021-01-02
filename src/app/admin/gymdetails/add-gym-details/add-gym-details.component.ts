import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddGymDetailsService } from '../../shared/add-gym-details.service';

@Component({
  selector: 'app-add-gym-details',
  templateUrl: './add-gym-details.component.html',
  styleUrls: ['./add-gym-details.component.css']
})
export class AddGymDetailsComponent implements OnInit {

  constructor(private service: AddGymDetailsService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId: null,
      GymName: '', 
      OpeningDate: '',
      Area: '',
      Longitude: '',
      Latitude: '',
      Contact1: '',
      Contact2: '',
      Website: '',
      Email: '',
      CreatedDate: '',
      ActiveStatus: ''
    }
  }
}
