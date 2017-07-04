import { Component, OnInit } from '@angular/core';

@Component({
  //Can have various selectors for components
  selector: 'app-servers',  // <> notation
  // selector: '[app-servers]',  // <x [element]> notation
  //selector: '.app-servers',  // <. Class> notation
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
