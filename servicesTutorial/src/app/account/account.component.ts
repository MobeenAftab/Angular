import { Component, Input } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Dependency injection
  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {

  }

  onSetTo(status: string) {
    this.accountService.updateAccont(this.id, status);
    //this.loggingService.logStatusChange(status);
    // Pass data through services emitter
    this.accountService.statusUpdated.emit(status);
  }
}
