import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output()  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated')  blueprintCeated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  OnAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  OnAddBlueprint() {
    this.blueprintCeated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
