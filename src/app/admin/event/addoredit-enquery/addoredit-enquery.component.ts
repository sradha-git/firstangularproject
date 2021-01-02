import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EnqueryService } from '../../shared/enquery.service';

@Component({
  selector: 'app-addoredit-enquery',
  templateUrl: './addoredit-enquery.component.html',
  styleUrls: ['./addoredit-enquery.component.css']
})
export class AddoreditEnqueryComponent implements OnInit {

  constructor(private service:EnqueryService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
    Name:'',
    Gender:'',
    CWeight:'',
    Height:'',
    Image:'',
    DOB:'',
    Age:'',
    BloodGroup:'',
    Address:'',
    Phone:'',
    Mobile:'',
    Email:'',
    }
  }
}
