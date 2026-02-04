import { Component } from '@angular/core';
import {LottieComponent, AnimationOptions} from 'ngx-lottie'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roseday',
  imports: [LottieComponent,CommonModule],
  templateUrl: './roseday.component.html',
  styleUrl: './roseday.component.css'
})
export class RosedayComponent {
  animation:any;
  isSubmitted = false;
  text = "I love you";
   options: AnimationOptions = {
    path:'/images/rose.json',
    autoplay:false,
    loop:false
  };

  onAnimationCreated(animation: any) {
    console.log('Lottie animation created');
    this.animation = animation;
  }

  onSubmit(){
    this.isSubmitted = true;
    this.text ="I love you too";
    if (this.animation) {
      this.animation.play();
    }
  }
}
