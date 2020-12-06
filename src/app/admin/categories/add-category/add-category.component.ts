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
  status:any = false;

  data:any;

  constructor() {
  }

  ngOnInit() {
  }

  save(){
    this.data = {
      name: this.name,
      parent_category: this.parent_category,
      description: this.description,
      image: this.image,
      tags: this.tags,
      status: this.status
    }



    console.log(this.data)
  }

}
