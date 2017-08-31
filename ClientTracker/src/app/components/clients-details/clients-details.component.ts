import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  onShowBalanceUpdate: boolean = false;

  constructor(private CS: ClientService,
              private router: Router,
              private route: ActivatedRoute,
              private FMS: FlashMessagesService) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    // Get client
    this.CS.getClient(this.id).subscribe(client => {
      if (client.balance > 0) {
        this.hasBalance = true;
      }
      this.client = client;
      console.log(this.client);
    });
  }

  updateBalance(id: string) {
    this.CS.updateClient(this.id, this.client);
    this.FMS.show('Balance Updated', {cssClass: 'alert-success', timeout: 4000});
    this.router.navigate(['/client/'+this.id]);
  }

  onDelete() {
    if(confirm("Delete Client?")) {
      this.CS.deleteClient(this.id);
      this.FMS.show('Client Deleted', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }

  
}
