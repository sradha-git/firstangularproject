import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddPersonalTrainingService } from '../../shared/add-personal-training.service';

@Component({
  selector: 'app-addoredit-personal-training',
  templateUrl: './addoredit-personal-training.component.html',
  styleUrls: ['./addoredit-personal-training.component.css']
})
export class AddoreditPersonalTrainingComponent implements OnInit {

  constructor(public service: AddPersonalTrainingService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId: null,
      TrainingId: '', 
      PTrainingName: '',
      Heading: '',
      Description: '',
      Fee: '',
      ActiveStatus: ''
      
    }
  }
}
