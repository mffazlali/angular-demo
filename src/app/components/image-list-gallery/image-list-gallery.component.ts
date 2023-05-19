import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-image-list-gallery',
  templateUrl: './image-list-gallery.component.html',
  styleUrls: ['./image-list-gallery.component.scss'],
})
export class ImageListGalleryComponent implements OnInit, AfterViewInit {
  @ViewChild('imageWrapper') imageWrapper!: ElementRef<HTMLElement>;
  @ViewChildren('imageResponsive') imagesResponsive!: QueryList<
    ElementRef<HTMLElement>
  >;
  @Input() images!: string[];
  rear = -1;
  front = -1;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    let active =
      this.imagesResponsive.filter(
        (image) => image.nativeElement.style.display !== 'none'
      ).length - 1;
    let inActive = this.imagesResponsive.length - 1 - active;
    if (inActive > -1) {
      this.rear = this.imagesResponsive.length - 1;
      this.front = inActive - 1;
    }
  }

  nextImage() {
    if (this.rear < this.imagesResponsive.length - 1) {
      this.imagesResponsive.get(++this.front)!.nativeElement.style.display =
        'none';
      this.imagesResponsive
        .get(++this.rear)!
        .nativeElement.style.removeProperty('display');
    }
  }

  prevImage() {
    if (this.front > -1 && this.front < this.rear) {
      this.imagesResponsive
        .get(this.front--)!
        .nativeElement.style.removeProperty('display');
      this.imagesResponsive.get(this.rear--)!.nativeElement.style.display =
        'none';
    }
  }
}
