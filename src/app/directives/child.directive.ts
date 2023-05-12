import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  constructor() {}
  @Input() name!: string;
}
