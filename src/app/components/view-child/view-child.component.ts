import { Component, ViewChild,OnInit,AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { ChildDirective } from 'src/app/directives/child.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements AfterViewInit  {
  value?: string;
  @ViewChild(ChildDirective) childDirective!:ChildDirective
  @ViewChildren(ChildDirective) childDirectives!:QueryList<ChildDirective>
  set name(value: any) {
    // this.value = value.color;
  }

  ngAfterViewInit(): void {
    // this.childDirective.color='blue'
    this.childDirectives.changes.subscribe(values=>{
      console.log(values)
    })
    console.log(this.childDirectives.map(item=>item.color).join(', '))
  }

}
