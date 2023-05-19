import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  QueryList,
  ViewChildren,
  AfterViewChecked,
} from '@angular/core';
import { ChildDirective } from 'src/app/directives/child.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild(ChildDirective) childDirective!: ChildDirective;
  @ViewChildren(ChildDirective) childDirectives!: QueryList<ChildDirective>;

  ngAfterViewInit(): void {
    this.childDirectives.changes.subscribe((values) => {
      console.log(values);
    });
    console.log(this.childDirectives.map((item) => item.color).join(', '));
  }

  ngAfterViewChecked() {
    console.log(this.childDirective);
    console.log(this.childDirectives.map((item) => item.color).join(', '));
  }
}
