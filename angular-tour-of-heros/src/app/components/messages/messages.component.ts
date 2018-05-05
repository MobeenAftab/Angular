import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Inject the singleton MessageService into msgSerice property when component created.
  // msgService must be public to be able to bind to in the template. 
  constructor(public msgService: MessageService) { }

  ngOnInit() {
  }

}
