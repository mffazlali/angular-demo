import { NgModule } from '@angular/core';
import { ViewChildComponent } from './view-child.component';
import { ChildDirective } from 'src/app/directives/child.directive';



@NgModule({
  declarations: [ViewChildComponent,ChildDirective],
  exports:[ViewChildComponent,ChildDirective],
  providers:[]
})
export class ViewChildModule { }
