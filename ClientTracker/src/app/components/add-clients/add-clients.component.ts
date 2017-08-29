import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})
export class AddClientsComponent implements OnInit {

  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnAdd:boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
