// App-wide message service to pass and expose cashe of messages[] array.
// Loosely-coupled communication between classes.

import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  // Array of messages
  messages: string[] = [];

  // Add new message to array of messages[]
  add(message: string) {
    this.messages.push(message);
  }

  // Empty messages array
  clear() {
    this.messages = [];
  }

  constructor() { }

}
