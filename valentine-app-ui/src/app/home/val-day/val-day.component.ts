import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-val-day',
  imports: [DayNavComponent, LottieComponent, CommonModule],
  templateUrl: './val-day.component.html',
  styleUrl: './val-day.component.css'
})
export class ValDayComponent {
  constructor(
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {}

  isAnimationWrapVisible = false;
  isPhotoAlbumOpen = false;
  showPlaneAnimation = false;
  greetingIndex =0;
  greetingNow = true;
  heartOptions: AnimationOptions = {
    path: '/images/heartsflying.json',
    autoplay: true,
    loop: true
  };
  planeOptions: AnimationOptions = {
    path: '/images/plane-flying.json',
    autoplay: true,
    loop: false
  };

  greetingTexts = [
    "Hello !",
    "Today is a special day.",
    "It's been how many days: ",
    "Hold on, let me check... ",
    "1048 days.",
    "Let's go down the memory lane and see how we got here."
  ]

  albumImages = Array.from({ length: 47 }, (_, index) => {
    const imageNumber = index + 1;
    if (imageNumber === 42) {
      return `/images/image42.JPG`;
    }
    const extension = imageNumber === 15 ? 'jpeg' : 'jpg';
    return `/images/image${imageNumber}.${extension}`;
  });

  currentSlideIndex = 0;
  private planePlayedForSlides = new Set<number>();
  private planeCompleteHandler: (() => void) | null = null;

  nextSlide() {
    if(this.currentSlideIndex ===this.albumImages.length-1)
    {
      this.isPhotoAlbumOpen = false;
      this.isAnimationWrapVisible = true;
    }
    else{
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.albumImages.length;
    this.updateAlbumVisibility();
    }
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.albumImages.length) %
      this.albumImages.length;
    this.updateAlbumVisibility();
  }

  private updateAlbumVisibility() {
    const slideNumber = this.currentSlideIndex + 1;
    const isPlaneSlide = slideNumber === 21 || slideNumber === 34;
    const shouldShowPlane =
      isPlaneSlide && !this.planePlayedForSlides.has(slideNumber);
    this.showPlaneAnimation = shouldShowPlane;
    this.isPhotoAlbumOpen = !shouldShowPlane;
  }

  nextGreeting() {
    if(this.greetingIndex < this.greetingTexts.length - 1)
      this.greetingIndex++;
       else 
       {
      this.greetingNow = false;
      this.isPhotoAlbumOpen = true;
      this.updateAlbumVisibility();
       }
    }

  onPlaneCreated(animation: any) {
    if (this.planeCompleteHandler) {
      animation.removeEventListener('complete', this.planeCompleteHandler);
    }

    this.planeCompleteHandler = () => this.onPlaneComplete();
    console.log("Plane animation complete");
    animation.addEventListener('complete', this.planeCompleteHandler);
  }

  private onPlaneComplete() {
    this.ngZone.run(() => {
      console.log("Plane animation is complete, starting slideshow");
      const slideNumber = this.currentSlideIndex + 1;
      this.planePlayedForSlides.add(slideNumber);
      this.showPlaneAnimation = false;
      this.isPhotoAlbumOpen = true;
      this.cdr.markForCheck();
    });
  }
}
