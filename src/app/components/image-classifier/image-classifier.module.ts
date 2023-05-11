import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageClassifierComponent } from './image-classifier.component';

@NgModule({
  declarations: [ImageClassifierComponent],
  imports: [CommonModule],
  exports: [ImageClassifierComponent],
})
export class ImageClassifierModule {}
