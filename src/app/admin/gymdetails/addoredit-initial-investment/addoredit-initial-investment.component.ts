import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InitialInvestmentService } from '../../shared/initial-investment.service';

@Component({
  selector: 'app-addoredit-initial-investment',
  templateUrl: './addoredit-initial-investment.component.html',
  styleUrls: ['./addoredit-initial-investment.component.css']
})
export class AddoreditInitialInvestmentComponent implements OnInit {

  constructor(private service: InitialInvestmentService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      GymId: null,
    InvestmentId : '',
    InvestmentDate : '',
    InvestmentHead : '',
    Amount: '',
    BillCopy: '',
    CreatedDate: '',
    CreatedBy: '',
    ActiveStatus: ''
    }
  }
}

