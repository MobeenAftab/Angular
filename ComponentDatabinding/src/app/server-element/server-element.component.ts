/* Testing Various life cycle hooks */
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')  element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('pContent') pCont: ElementRef;

  constructor() {
    console.log('Server Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Server ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('Server ngOnInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('P Content: ' + this.pCont.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('Server ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Server ngAfterContentInit');
    console.log('P Content: ' + this.pCont.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('Server AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Server AfterViewInit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('Server AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Server OnDestroy');
  }
}
