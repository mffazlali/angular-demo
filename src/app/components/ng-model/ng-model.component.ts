import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  @Input()
  myProp!: string;
  // Output prop name must be Input prop name + 'Change'
  // Use in your component to write an updated value back out to the parent
  @Output()
  myPropChange = new EventEmitter<string>();
}
