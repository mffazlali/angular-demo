import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildComponent } from './view-child.component';
import { ChildDirective } from 'src/app/directives/child.directive';



@NgModule({
  declarations: [ViewChildComponent,ChildDirective],
  imports: [
    CommonModule,
  ],
  exports:[ViewChildComponent,ChildDirective],
  providers:[]
})
export class ViewChildModule { }
