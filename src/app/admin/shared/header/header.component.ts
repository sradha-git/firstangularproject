import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var body = $('body');
    var overlay = $('.overlay');
    var width = $(window).width();
    if (width < 1170) {
      body.addClass('ls-closed');
    }
    else {
      body.removeClass('ls-closed');
    }


    //Open left sidebar panel
    $('.bars').on('click', function () {
      body.toggleClass('overlay-open');
      if (body.hasClass('overlay-open')) { 
        overlay.fadeIn(); 
      } else {
         overlay.fadeOut(); 
        }
    });

    var _this = this;
    var $body = $('body');
    var $overlay = $('.overlay');
    //Close sidebar
    $(window).click(function (e) {
      var $target = $(e.target);

      if (!$target.hasClass('bars') && $target.parents('#leftsidebar').length === 0) {
        if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
        $body.removeClass('overlay-open');
      }
    });


    var width = $(window).width();
    if(width < 1170){
      $(".sidebar .menu .list li").click(function () {
        $("body").removeClass('overlay-open');
        $('.overlay').fadeOut();
      });
    }
   

    
  }

}
