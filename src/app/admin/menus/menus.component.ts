import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import $ from "jquery";
declare var jquery: any;
declare var $: any;
declare var DataTable: any;
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('#menuListTable').DataTable();
    
    $('[data-toggle="tooltip"]').tooltip({
      container: 'body'
  });
  }

}
