import { NgModule } from '@angular/core';
import { FileUploaderComponent } from './file-uploader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FileUploaderComponent],
})
export class FileUploaderModule {}
