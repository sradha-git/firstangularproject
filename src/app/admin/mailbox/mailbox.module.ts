import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [InboxComponent],
  imports: [
    SharedModule,
    CommonModule,
    MailboxRoutingModule
  ]
})
export class MailboxModule { }
