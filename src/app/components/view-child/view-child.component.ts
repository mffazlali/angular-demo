import { Component, ViewChild,OnInit,AfterViewInit } from '@angular/core';
import { ChildDirective } from 'src/app/directives/child.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements AfterViewInit  {
  value?: string;
  @ViewChild(ChildDirective) childDirective!:ChildDirective
  set name(value: any) {
    // this.value = value.name;
  }

  ngAfterViewInit(): void {
    this.childDirective.name='ehsan'
  }

}
