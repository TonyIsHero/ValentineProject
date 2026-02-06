import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-hugday',
  imports: [CommonModule, LottieComponent],
  templateUrl: './hugday.component.html',
  styleUrl: './hugday.component.css'
})
export class HugdayComponent implements OnInit {

  text1 = "Hi! wanna travel the world with me?";
  text2 = "Hug Day is the perfect occasion to start our journey together.";
  text3 = "Ready?";
  text4 = "Let's make unforgettable memories together!";
  text5 = "I will be there for you";
  text6 = "ALWAYS!";
  text7 = "Give me a hug then!";

  texts:string[] =[this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7];
  currentTextIndex = 0;
  displayedText = '';
  animation :any;
  timerId:any;

   options: AnimationOptions = {
    path: 'images/Hi.json',
    autoplay:true,
    loop:true
  };

  ngOnInit(): void {
      // this.getLottiePath(this.currentTextIndex);
      this.generateText(this.currentTextIndex);
  }

  showNextText(){
    if(this.currentTextIndex < this.texts.length-1){
      this.currentTextIndex++;
      if(this.currentTextIndex === 2)
        this.options = {
       path: 'images/Questioning.json',
       autoplay:true,
       loop:true
     };
     if(this.currentTextIndex === 3)
      this.options = {
       path: 'images/travel.json',
       autoplay:true,
       loop:true
     };
     if(this.currentTextIndex === 6)
      this.options = {
        path: 'images/hug.json',
        autoplay:true,
        loop:true,
      };
    }
    else
    {
      this.currentTextIndex=0;
      this.options = {
        path: 'images/Hi.json',
        autoplay:true,
        loop:true
      };
    }
    this.displayedText = '';
    this.generateText(this.currentTextIndex);
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

  onAnimationCreated(animation: any) {
    this.animation = animation;
    console.log("Animation created:", animation);
  }

}
