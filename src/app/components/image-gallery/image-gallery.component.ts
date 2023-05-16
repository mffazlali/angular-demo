import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent implements OnInit {
  // Get the slider container and wrapper
  container = document.getElementById('slider-container');
  wrapper = document.getElementById('slider-wrapper');
  interval=setInterval(this.nextSlide, 3000);

  // Calculate the width of a single slide
  slideWidth = 0;

  // Initialize the slide index
  slideIndex = 0;

  constructor() {}

  ngOnInit() {
    this.slideWidth = this.container!.offsetWidth;  
    this.interval = setInterval(this.nextSlide, 3000);

  }

  mouseEnter(){
    clearInterval(this.interval);
  }

  mouseLeave(){
    this.interval = setInterval(this.nextSlide, 3000);
  }

  slideImages() {
    // Calculate the position to slide to
    var slidePosition = -this.slideIndex * this.slideWidth;
    // Slide the wrapper to the new position
    this.wrapper!.style.transform = 'translateX(' + slidePosition + 'px)';
  }

  // Function to move to the next slide
  nextSlide() {
    this.slideIndex++;
    if (this.slideIndex >= this.wrapper!.children.length) {
      this.slideIndex = 0;
    }
    this.slideImages();
  }

  // Function to move to the previous slide
  previousSlide() {
    this.slideIndex--;
    if (this.slideIndex < 0) {
      this.slideIndex = this.wrapper!.children.length - 1;
    }
    this.slideImages();
  }
}
