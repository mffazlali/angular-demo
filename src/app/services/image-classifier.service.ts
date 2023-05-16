import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})
export class ImageClassifierService {

  private model= tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4');;

  constructor() {
    this.model = tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/4');
    // this.loadModel();
  }

  async loadModel() {
    // this.model = await tf.loadGraphModel('assets/model.json');
  }

  async classifyImage(imageFile: File): Promise<string> {
    const img = await this.loadImage(imageFile);
    const modal2=await this.model
    const logits = modal2.predict(img) as tf.Tensor;
    const prediction = await logits.data();
    return this.getClassName(prediction.indexOf(Math.max(...prediction)));
  }

  private async loadImage(imageFile: File): Promise<tf.Tensor3D> {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const reader = new FileReader();
    return new Promise<tf.Tensor3D>((resolve, reject) => {
      reader.onload = () => {
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          if(ctx){
          ctx.drawImage(img, 0, 0, img.width, img.height);
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const tensor = tf.browser.fromPixels(imageData).toFloat();
          const resized = tf.image.resizeBilinear(tensor, [224, 224]);
          resolve(resized.expandDims(0) as tf.Tensor3D);
          }
        };
        img.onerror = (error) => reject(error);
        img.src = reader.result as string;
      };
      reader.readAsDataURL(imageFile);
    });
  }

  private getClassName(index: number): string {
    const classNames = [
      'class1',
      'class2',
      'class3'
    ];
    return classNames[index];
  }

}
