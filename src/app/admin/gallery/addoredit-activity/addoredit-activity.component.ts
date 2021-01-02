import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivityService } from '../../shared/activity.service';

@Component({
  selector: 'app-addoredit-activity',
  templateUrl: './addoredit-activity.component.html',
  styleUrls: ['./addoredit-activity.component.css']
})
export class AddoreditActivityComponent implements OnInit {

  constructor(public service:ActivityService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
   ActivityId:'',
   ActivityImage:'',
    ActivityName:'',
    Description: '',
    CreatedDate: '',
    ActiveStatus: '',

    }
  }
}
