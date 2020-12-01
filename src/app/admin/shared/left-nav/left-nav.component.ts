import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import $ from "jquery";
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Collapse or Expand Menu
    $('.menu-toggle').on('click', function (e) {
      var $this = $(this);
      var $content = $this.next();

      if ($($this.parents('ul')[0]).hasClass('list')) {
        var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

        $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
          if ($(val).is(':visible')) {
            $(val).prev().toggleClass('toggled');
            $(val).slideUp();
          }
        });
      }

      $this.toggleClass('toggled');
      $content.slideToggle(320);
    });
  }

  dashboard() {
    this.router.navigate(['/admin/dashboard'])
  }
  categories() {
    this.router.navigate(['/admin/categories'])
  }

}
