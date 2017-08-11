import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
    this.backgroundColor = this.defaultColor;
  }

  // Custom property binding to select background color
  @Input() defaultColor: string = 'transparent';
  // Property binding using an alias
  @Input('appBetterDirective') highlightColor: string = 'green';

  // HostBinding - directive that can change dom elements without using Renderer2
  // bind to any property on the selected element
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  // HostListener - directive that triggers every time the argument event is called, Takes
  // function argument as string

  // Built a reactive directive based on mouse position
  @HostListener('mouseover') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
