import { AfterContentInit, Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ChildDirective } from 'src/app/directives/child.directive';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss'],
})
export class ContentChildComponent implements AfterContentInit {
  @ContentChild(ChildDirective) childDirective!: ChildDirective;
  @ContentChildren(ChildDirective) childDirectives!: QueryList<ChildDirective>;
  @ContentChild('contentChild') content!: any;

  ngAfterContentInit() {
    console.log('childDirective', this.childDirective);
    console.log('childDirectives', this.childDirectives);
    console.log('contentChild', this.content);
  }
}
