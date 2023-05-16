import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { NgxColorsModule } from 'ngx-colors';
import { ComponentHolderModule } from './component-holder/component-holder.module';
import { ContentChildModule } from './content-child/content-child.module';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { NgTemplateModule } from './ng-template/ng-template.module';
import { ViewChildModule } from './view-child/view-child.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageClassifierService } from '../services/image-classifier.service';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxColorsModule,
    FileUploaderModule,
    ViewChildModule,
    ContentChildModule,
    ImageGalleryModule,
    ComponentHolderModule,
    NgTemplateModule,
  ],
  exports: [RouterModule],
  providers: [ImageClassifierService],
})
export class ComponentsModule {}
