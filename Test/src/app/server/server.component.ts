import {Component} from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
    `]
})

  export class ServerComponent {

    //ran: number = Math.random()*10;
    serverId: number = Math.random();
    serverStatus: string = 'offline';

    constructor() {
      this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline';
    }

    GetServerStatus() {
      return this.serverStatus;
    }

    getColor() {
      return this.serverStatus === 'online' ? 'green' : 'red';
    }
  }
