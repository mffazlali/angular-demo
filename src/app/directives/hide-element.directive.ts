import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHideElement]',
})
export class HideElementDirective implements OnInit, AfterViewInit {
  @Input() wrapperElement!: HTMLElement;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {}

  ngAfterViewInit() {
    if (this.wrapperElement.scrollWidth > this.wrapperElement.clientWidth) {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}
