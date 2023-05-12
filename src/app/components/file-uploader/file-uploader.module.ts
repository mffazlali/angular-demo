import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FileUploaderComponent],
  imports: [    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
],
  exports: [FileUploaderComponent],
})
export class FileUploaderModule {}
