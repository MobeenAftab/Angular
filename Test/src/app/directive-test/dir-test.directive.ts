import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[app-directiveTest]'
})

export class DirectiveTest implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}
