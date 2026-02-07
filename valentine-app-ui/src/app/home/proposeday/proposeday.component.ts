import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-proposeday',
  imports: [DayNavComponent, LottieComponent, CommonModule],
  templateUrl: './proposeday.component.html',
  styleUrl: './proposeday.component.css'
})
export class ProposedayComponent implements OnInit {

  private listener?: () => void;
  animIdx: number = 0;
  anim:any;
  texts: string[] = [
    "HI !",
    "I think you already know this",
    "But I wanted to say it anyway",
    "I LOVE YOU",
    "I want to be with you forever",
    "I want to grow old with you",
    "Will you be my valentine ?"
  ];

  currentIndex: number = 0;

  displayedText: string = this.texts[0];
  heartOptions: AnimationOptions = {
    path: '/images/heartsflying.json',
    autoplay: true,
    loop: true
  };

  coupleOptions: AnimationOptions = {};
  animation: any;
  centerVisible: boolean = true;
  centerFadeIn: boolean = false;

  private paths = [
    '/images/couple.json',
    '/images/couple2.json',
    '/images/couple3.json'
  ];


  ngOnInit(): void {
    this.coupleOptions = {
      path: this.paths[this.animIdx],
      autoplay: true,
      loop: false
    }
  }
  onAnimationCreated(animation: any): void {
    this.animation=animation;
  }

  nextText(): void {
    if (this.currentIndex < this.texts.length - 1)
      this.currentIndex++;
    else
      this.currentIndex = 0;
    this.displayedText = this.texts[this.currentIndex];
}

onCreated(animation: any): void {
  if(this.anim && this.listener){
    this.anim.removeEventListener('complete', this.listener);
  }
  this.anim = animation;
  this.listener = () => this.nextAnim();
  this.anim.addEventListener('complete', this.listener);
  try {
    if (typeof this.anim.play === 'function') this.anim.play();
    else if (typeof this.anim.goToAndPlay === 'function') this.anim.goToAndPlay(0, true);
  } catch (e) {}
  // trigger fade-in of the wrapper shortly after creation
  setTimeout(() => this.centerFadeIn = true, 20);
}

nextAnim(): void {
  console.log('animation completed, switching to next');
  if (this.anim) {
    try { if (this.listener) this.anim.removeEventListener('complete', this.listener); } catch(e) {}
    this.anim = null;
    this.listener = undefined;
  }

  // hide and recreate the ng-lottie component to ensure a fresh instance
  this.centerFadeIn = false;
  this.centerVisible = false;
  this.animIdx = (this.animIdx + 1) % this.paths.length;
  this.coupleOptions = {
    path: this.paths[this.animIdx],
    autoplay: true,
    loop: false
  };
  console.log('next animation set:', this.coupleOptions.path);
  // wait a bit to allow fade-out/spacing, then recreate and fade in
  setTimeout(() => {
    this.centerVisible = true;
    setTimeout(() => this.centerFadeIn = true, 20);
  }, 200);
}
}
