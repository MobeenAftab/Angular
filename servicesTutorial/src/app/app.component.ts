import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // Empty account object array
  accounts: {name: string, status: string}[] = [];

  //Injecting accounts into array
  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
