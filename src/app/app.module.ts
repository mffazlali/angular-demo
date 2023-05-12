import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxColorsModule } from 'ngx-colors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageClassifierService } from './image-classifier.service';
import { ImageClassifierModule } from './components/image-classifier/image-classifier.module';
import { FileUploaderModule } from './components/file-uploader/file-uploader.module';
import { ViewChildModule } from './components/view-child/view-child.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxColorsModule,
    ImageClassifierModule,
    FileUploaderModule,
    ViewChildModule,
  ],
  providers: [ImageClassifierService],
  bootstrap: [AppComponent],
})
export class AppModule {}
