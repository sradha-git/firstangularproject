import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  name:any;
  parent_category:any;
  description:any;
  image:any;
  tags:any;
  status:any;
  
  constructor() {
   }

  ngOnInit() {
  }

}
