import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
// Injectable is meta data so a service can inject another service into itself, Usually added to the receiving service

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {

  }

  statusUpdated = new EventEmitter<string>();

  addAcount(name: string, status: string) {
    this.accounts.push({name: name, status:status});
    this.loggingService.logStatusChange(status);
  }

  updateAccont(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
