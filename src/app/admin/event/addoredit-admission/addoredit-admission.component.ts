import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmissionService } from '../../shared/admission.service';

@Component({
  selector: 'app-addoredit-admission',
  templateUrl: './addoredit-admission.component.html',
  styleUrls: ['./addoredit-admission.component.css']
})
export class AddoreditAdmissionComponent implements OnInit {

  constructor(public service:AdmissionService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId: null,
    Name:'',
    Gender:'',
    CWeight:'',
    GWeight:'',
    Height:'',
    DOB:'',
    Age:'',
    BloodGroup:'',
    Phone:'',
    Mobile:'',
    Email: '',
    EContact:'',
    Membership:'',
    TimeSlot:'',
    DOJ:'',
    Image:'',
    Address:''

    }
  }
}
