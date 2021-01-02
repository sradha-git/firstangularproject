import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OwnerDetailsService } from '../../shared/owner-details.service';

@Component({
  selector: 'app-addoredit-owner',
  templateUrl: './addoredit-owner.component.html',
  styleUrls: ['./addoredit-owner.component.css']
})
export class AddoreditOwnerComponent implements OnInit {

  constructor(public service:OwnerDetailsService) { 
    
  }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
    OwnerId:'',
    OwnerName:'',
    Dob:'',
    Details:'',
    Email:'',
    Phone:'',
    ContactedDate:'',
    ActiveStatus:''
    }
  }
}
