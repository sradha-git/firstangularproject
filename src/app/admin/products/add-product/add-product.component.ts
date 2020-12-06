import { Component, OnInit } from '@angular/core';
import $ from "jquery";

declare var jquery: any;
declare var $: any;
declare var CKEDITOR: any;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('#wizard_horizontal').steps({
      headerTag: 'h2',
      bodyTag: 'section',
      transitionEffect: 'slideLeft',
      onInit: function (event, currentIndex) {
        setButtonWavesEffect(event);
      },
      onStepChanged: function (event, currentIndex, priorIndex) {
        setButtonWavesEffect(event);
      }
    });


    function setButtonWavesEffect(event) {
      $(event.currentTarget).find('[role="menu"] li a').removeClass('waves-effect');
      $(event.currentTarget).find('[role="menu"] li:not(.disabled) a').addClass('waves-effect');
    }

    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 300;

  }

}
