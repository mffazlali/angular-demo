import { NgModule } from '@angular/core';
import { ImageListGalleryComponent } from './image-list-gallery.component';
import { CommonModule } from '@angular/common';
import { HideElementDirective } from 'src/app/directives/hide-element.directive';

@NgModule({
  declarations: [ImageListGalleryComponent, HideElementDirective],
  imports: [CommonModule],
  exports: [ImageListGalleryComponent],
})
export class ImageListGalleryModule {}
