import { ChangeDetectorRef,OnInit, Component, NgZone, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-val-day',
  imports: [DayNavComponent, LottieComponent, CommonModule],
  templateUrl: './val-day.component.html',
  styleUrl: './val-day.component.css'
})
export class ValDayComponent implements OnInit {
  constructor(
    private readonly ngZone: NgZone,
    private readonly cdr: ChangeDetectorRef
  ) {}

@ViewChild('bgaudio') bgaudio!:ElementRef<HTMLAudioElement>

  playSong = false;
  displayedText = "";
  wrapTextIndex = 0;
  private timerId :any;
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

  wrapTexts = [
    "কত দিন কেটে গেল",
    "Neon Shirt",
    "Beige Shirt",
    "বেলুড়",
    "NEWCASTLE",
    "मुंबई",
    "So many memories",
    "Beautful Ones",
    "আরো চাই",
    "Please?",
    "হবে তো ?",
    "So....",
    "I Love you",
    "HAPPY VALENTINE'S DAY",
    "THANK YOU POOKIE"
  ]

  greetingTexts = [
    "Finally we are here",
    "Before Starting",
    "Did you enjoy?",
    "Yes?",
    "Do they call this love?",
    "Maybe",
    "Definitely !",
    "We met on April 3, 2023",
    "That is 1048 Days",
    "But how did we get here?",
    "Wanna Know?"
  ]

  ngAfterViewInit() {
    this.updateAudioPlayback();
  }

  ngOnInit():void{
      this.generateText(0,this.greetingTexts);
  }

  private updateAudioPlayback() {
    if (!this.bgaudio) {
      return;
    }

    const audio = this.bgaudio.nativeElement;

    if (this.playSong) {
      audio.volume = 0;
      audio.play().then(() => {
        this.fadeInAudio(audio, 0.4, 10000); // target volume, duration ms
      }).catch(() => {
        // autoplay blocked until user interaction
      });
    } else {
      audio.pause();
    }
  }

private fadeInAudio(audio: HTMLAudioElement, target: number, durationMs: number) {
  const steps = 24;
  const step = target / steps;
  const interval = durationMs / steps;

  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(target, current + step);
    audio.volume = current;
    if (current >= target) {
      clearInterval(timer);
    }
  }, interval);
}

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
      this.generateText(0, this.wrapTexts);
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
    {
      this.greetingIndex++;
      this.generateText(this.greetingIndex, this.greetingTexts)
    }
       else 
       {
      this.greetingNow = false;
      this.isPhotoAlbumOpen = true;
      this.playSong=true;
      this.updateAudioPlayback();
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

  generateText(index: number, texts : string[]) {
    clearInterval(this.timerId);
    let i = 0;
      this.timerId = setInterval(() => {
        this.displayedText = texts[index].slice(0,i+1);
        i++;
        if(i>=texts[index].length){
          clearInterval(this.timerId);
      }
  },50);
  }

  nextWrapText(){
    if(this.wrapTextIndex<this.wrapTexts.length-1)
    {
      this.wrapTextIndex++;
      this.generateText(this.wrapTextIndex, this.wrapTexts);
    }
  }
}
