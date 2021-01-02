import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoService } from '../../shared/video.service';

@Component({
  selector: 'app-addoredit-video',
  templateUrl: './addoredit-video.component.html',
  styleUrls: ['./addoredit-video.component.css']
})
export class AddoreditVideoComponent implements OnInit {

  constructor(public service:VideoService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId:null,
    videoId:'',
    VideoLink:'',
    ActiveStatus:'',
    Description:'',
    Purpose:''
  }
  }
}

