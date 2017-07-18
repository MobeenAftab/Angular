import { Component, OnInit } from '@angular/core';

@Component({
  //Can have various selectors for components
  selector: 'app-servers',  // <> notation
  // selector: '[app-servers]',  // <x [element]> notation
  //selector: '.app-servers',  // <. Class> notation
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServer: boolean = false;
  serverCreation: string = 'No server created';
  serverName: string = 'Server Name';

  constructor() {
    // Allow user to add server after 2 seconds
    setTimeout(() => {
      this.addServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  OnCreateServer() {
    this.serverCreation = 'Server' + this.serverName +  'cretaed!';
  }

  OnServerName(event: any) {
    //this.serverName = (<HTMLInputElement>event.target).value;
    this.serverName = event.target.value;

  }

}
