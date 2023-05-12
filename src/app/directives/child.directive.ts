import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'appChild',
})
export class ChildDirective {
  constructor(private el: ElementRef) {}
  @Input() color!: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
