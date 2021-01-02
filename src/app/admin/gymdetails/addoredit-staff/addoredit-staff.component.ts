import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../shared/staff.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addoredit-staff',
  templateUrl: './addoredit-staff.component.html',
  styleUrls: ['./addoredit-staff.component.css']
})
export class AddoreditStaffComponent implements OnInit {
  

  constructor(public service:StaffService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
      StaffId:'',
      Name:'',
      Category:'',
      Gender:'',
      Address:'',
      Contact:'',
      Email:'',
      Salary:'',
      Photo:'',
      ActiveStatus:'',
    }

}
