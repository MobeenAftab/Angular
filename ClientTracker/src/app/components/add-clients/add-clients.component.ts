import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }
  disableBalanceOnAdd: boolean = false;

  constructor(
    private FMS: FlashMessagesService,
    private router: Router,
    private clientService: ClientService,
    private settingsService: SettingsService) { }

  ngOnInit() {
   this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if(this.disableBalanceOnAdd) {
      value.balance = 0;
    }
    if(!valid) {
      // Redirect to same page
      this.FMS.show('Please fill in all fields', {cssClass:'alert-danger', timeout: 4000});
      this.router.navigate(['add-client']);
    } else {
      // console.log(valid);
      this.clientService.newClient(value);
      this.FMS.show('Client Added', {cssClass:'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }
}
