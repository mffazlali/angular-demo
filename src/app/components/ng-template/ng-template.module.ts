import { NgModule } from '@angular/core';
import { NgTemplateComponent } from './ng-template.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

@NgModule({
  declarations: [NgTemplateComponent],
  imports: [CommonModule],
  exports: [NgTemplateComponent],
})
export class NgTemplateModule {}
