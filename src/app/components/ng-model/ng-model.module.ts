import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModelComponent } from './ng-model.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgModelComponent],
  imports: [CommonModule,FormsModule],
  exports: [NgModelComponent],
})
export class NgModelModule {}
