import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {LottieComponent, AnimationOptions} from 'ngx-lottie'
import { DayNavComponent } from '../day-nav/day-nav.component';

@Component({
  selector: 'app-teddyday',
  imports: [CommonModule, LottieComponent, DayNavComponent],
  templateUrl: './teddyday.component.html',
  styleUrl: './teddyday.component.css'
})
export class TeddydayComponent implements OnInit, OnDestroy {

  Text1 = "Hi! Disha, are you ready for a cuddly surprise?";
  Text2 = "On this Teddy Day, I bring you a teddy bear full of hugs and love!";
  Text3 = "Just like this teddy, I promise to be there for you, through thick and thin.";
  Text4 = "So, here's a teddy to hold onto whenever you need a warm embrace.";
  Text5 = "Happy Teddy Day, my love! May our bond be as strong and comforting as this teddy bear.";

  texts: string[]=[this.Text1, this.Text2, this.Text3, this.Text4, this.Text5];
  displayedText: string = '';
  currentTextIndex: number = 0;
  leftButtonVisible: boolean = false;
  rightButtonVisible: boolean = true;
  private timerId: any;
  animation:any;
  showTeddy: boolean = false;
  ngOnInit(): void {
    this.generateText(this.currentTextIndex);
  }

  options: AnimationOptions = {
    path:'/images/teddy.json',
    autoplay:true,
    loop:true
  };

    onAnimationCreated(animation: any) {
    console.log('Lottie animation created');
    this.animation = animation;
  }

  generateText(index: number) {
    clearInterval(this.timerId);
    let i = 0;
      this.timerId = setInterval(() => {
        this.displayedText = this.texts[this.currentTextIndex].slice(0,i+1);
        i++;
        if(i>=this.texts[this.currentTextIndex].length){
          clearInterval(this.timerId);
      }
  },50);
  }
  nextText(): void {
      this.currentTextIndex++;
      this.leftButtonVisible = true;
      this.showTeddy = this.currentTextIndex > 0;
      this.displayedText = '';
      this.generateText(this.currentTextIndex);
      if(this.currentTextIndex === this.texts.length-1)
        this.rightButtonVisible = false;

  }
  previousText(): void {
      this.currentTextIndex--;
      this.displayedText='';
      this.showTeddy = this.currentTextIndex > 0;
      this.generateText(this.currentTextIndex);
      if(this.currentTextIndex === 0){
        this.leftButtonVisible = false;
        this.rightButtonVisible = true;
      }
  }
  ngOnDestroy(): void {
      clearInterval(this.timerId);
  }
}
