import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output()  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated')  blueprintCeated = new EventEmitter<{serverName: string, serverContent: string}>();

  // Replace newServerName with local reference
  //newServerName = '';
  //newServerContent = '';

  // View Child grants direct access to elements in DOM
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  // Recive HTML element as parameter
  OnAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  OnAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCeated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // Recive HTML element as parameter
  // OnAddServer(nameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     // Get value of HTML element
  //     serverName: nameInput.value,
  //     serverContent: this.newServerContent
  //   });
  // }
}
