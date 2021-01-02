import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';

import { ManageIncomeComponent } from './manage-income/manage-income.component';
import { ManageExpenditureComponent } from './manage-expenditure/manage-expenditure.component';
import { ManageSalaryComponent } from './manage-salary/manage-salary.component';
import { AddoreditExpenditureComponent } from './addoredit-expenditure/addoredit-expenditure.component';
import { AddoreditIncomeComponent } from './addoredit-income/addoredit-income.component';
import { AddoreditSalaryComponent } from './addoredit-salary/addoredit-salary.component';

@NgModule({
  declarations: [AccountComponent, , ManageIncomeComponent, ManageExpenditureComponent, ManageSalaryComponent, AddoreditExpenditureComponent, AddoreditIncomeComponent, AddoreditSalaryComponent],
  imports: [
    CommonModule,
    SharedModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
