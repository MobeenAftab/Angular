import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/accounts.service';

// Proving =  a service is telling angular how to create it Adding a service to providers will create a new instance of it,
// overriding pervious instances

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent {

  // Dependency injection
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
    // Recieve event emits
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAcount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
