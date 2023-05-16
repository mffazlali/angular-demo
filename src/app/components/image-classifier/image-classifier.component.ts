import { Component } from '@angular/core';
import { ImageClassifierService } from 'src/app/services/image-classifier.service';

@Component({
  selector: 'app-image-classifier',
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.scss'],
})
export class ImageClassifierComponent {
  private imageFile?: File;
  public prediction?: string;

  constructor(private imageClassifier: ImageClassifierService) {}

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  async classify() {
    if (this.imageFile) {
      this.prediction = await this.imageClassifier.classifyImage(
        this.imageFile
      );
    }
  }
}
