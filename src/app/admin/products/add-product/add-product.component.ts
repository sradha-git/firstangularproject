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

    var form = $('#wizard_horizontal').show();

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

    form.steps({
      headerTag: 'h3',
      bodyTag: 'fieldset',
      transitionEffect: 'slideLeft',
      onInit: function (event, currentIndex) {
        $.AdminBSB.input.activate();

        //Set tab width
        var $tab = $(event.currentTarget).find('ul[role="tablist"] li');
        var tabCount = $tab.length;
        $tab.css('width', (100 / tabCount) + '%');

        //set button waves effect
        setButtonWavesEffect(event);
      },
      onStepChanging: function (event, currentIndex, newIndex) {
        if (currentIndex > newIndex) { return true; }

        if (currentIndex < newIndex) {
          form.find('.body:eq(' + newIndex + ') label.error').remove();
          form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
        }

        form.validate().settings.ignore = ':disabled,:hidden';
        return form.valid();
      },
      onStepChanged: function (event, currentIndex, priorIndex) {
        setButtonWavesEffect(event);
      },
      onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ':disabled';
        return form.valid();
      },
      onFinished: function (event, currentIndex) {
        // swal("Good job!", "Submitted!", "success");
      }
    });

    form.validate({
      highlight: function (input) {
        $(input).parents('.form-line').addClass('error');
      },
      unhighlight: function (input) {
        $(input).parents('.form-line').removeClass('error');
      },
      errorPlacement: function (error, element) {
        $(element).parents('.form-group').append(error);
      },
      rules: {
        'confirm': {
          equalTo: '#password'
        }
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
