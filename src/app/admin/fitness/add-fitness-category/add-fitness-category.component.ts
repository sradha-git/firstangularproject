import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FitnessCategoryService } from '../../shared/fitness-category.service';

@Component({
  selector: 'app-add-fitness-category',
  templateUrl: './add-fitness-category.component.html',
  styleUrls: ['./add-fitness-category.component.css']
})
export class AddFitnessCategoryComponent implements OnInit {

  constructor(public service: FitnessCategoryService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId: null,
      CategoryId: '', 
      CategoryName: '',
      ActiveStatus: '',
      Description: '',
      Image: ''
      
    }
  }
}
