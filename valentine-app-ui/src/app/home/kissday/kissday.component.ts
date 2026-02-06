import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-kissday',
  imports: [CommonModule, LottieComponent],
  templateUrl: './kissday.component.html',
  styleUrl: './kissday.component.css'
})
export class KissdayComponent implements OnInit {

  missesMe = true;
  wannaKiss = false;
  kissesMe = false;
  timeOfDay : 'Morning' | 'Afternoon' | 'Evening' = 'Morning';
  text1 :string = "";
  text2 = "You miss me?";
  text3 = "I miss you too! T-T";
  displayedText = '';
  currentTextIndex = 0;
  animateText = false;
  toggleNo = false;
  noX = 0;
  noY = 0;
  texts:string[] = [];
  animation:any;
  options: AnimationOptions = {};

  ngOnInit(): void {
      this.updateTimeOfDay();
      this.text1 = `Good ${this.timeOfDay}, Disha!`;  
      this.texts = [this.text1, this.text2, this.text3];
      this.displayedText = this.texts[0];
      this.animateText = true;
      this.options = {
        path:`images/${this.timeOfDay}.json`,
        autoplay:true,
        loop:true
      }
  }

  updateTimeOfDay():void{
    const currentHour = new Date().getHours();
    if(currentHour >= 5 && currentHour < 12)
      this.timeOfDay = 'Morning';
    else if(currentHour >= 12 && currentHour < 17)
      this.timeOfDay = 'Afternoon';
    else      this.timeOfDay = 'Evening';
  }

  nextText(): void{
    console.log(this.currentTextIndex);
    if(this.currentTextIndex < this.texts.length-1){
      this.currentTextIndex++;
      this.displayedText = this.texts[this.currentTextIndex];
      this.animateText = false;
      setTimeout(() => {
        this.animateText = true;
      }, 0);
    }
    else
    {
      this.missesMe= false;
      this.wannaKiss = true;
    }
  }

  onAnimationCreated(animation: any) {
    console.log('Lottie animation created');
    this.animation = animation;
  }

  toggleNoButton(): void {
    this.toggleNo = !this.toggleNo;
  }

  dodgeNo(): void {
    // Random dramatic jump
    const x = Math.floor(Math.random() * 220) - 110;
    const y = Math.floor(Math.random() * 180) - 20;
    this.noX = x;
    this.noY = y;
  }

  kissMe(){
    this.wannaKiss = false;
    this.kissesMe = true;
    this.options = {
      path:'images/kiss.json',
      autoplay:true,
      loop:true
  };
}
}
