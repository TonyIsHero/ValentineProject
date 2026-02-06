import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';

@Component({
  selector: 'app-chocoday',
  imports: [CommonModule, DayNavComponent],
  templateUrl: './chocoday.component.html',
  styleUrl: './chocoday.component.css'
})
export class ChocodayComponent implements OnInit {


  eatenHeight = 0;
  finished = false;

  text1Korean = "초콜릿 데이 축하해! 너와 함께라면 삶이 더 달콤해.";
  text1 ="Happy Chocolate Day! Life is sweeter with you";

  text2Korean = "사실, 나는 네가 초콜릿보다 더 달콤하다고 생각해.";
  text2= "Actually, I think you are sweeter than a chocolate";

  text3 = "Yes, I know it's cheesy, but it's true!";
  text3Korean = "네, 좀 진부한 말인 건 알지만 사실이에요!";

  text4= "I hope our love continues to grow like a never-ending chocolate bar.";
  text4Korean = "우리의 사랑이 끝없이 늘어나는 초콜릿바처럼 계속해서 커져가길 바라요.";
  private intervalId: any;

  enTexts:string[] =[this.text1, this.text2, this.text3, this.text4];
  krTexts:string[] =[this.text1Korean, this.text2Korean, this.text3Korean, this.text4Korean];
  currentLang ="en";
  wordDelay = 0.2;
  lineGap = 0.4;
  line2Start = 0;
  animationKey = 0;
  words: string[] = [];
  currentTextIndex = 0;
  leftButtonVisible = false;
  rightButtonVisible = true;

    ngOnInit(): void {
      this.refreshWords(this.enTexts[this.currentTextIndex]);
  }

  private splitWords(text: string): string[] {
    return text.trim().split(/\s+/);
  }

  private refreshWords(line: string) {
    // Clear then re-add to force the word-fade animation to restart
    this.words = [];
    this.animationKey += 1;
    setTimeout(() => {
      this.words = this.splitWords(line);
      this.animationKey += 1;
    }, 0);
  }

  getDelay(index: number, lineStart: number): string {
    return `${lineStart + index * this.wordDelay}s`;
  }

  trackByWord(index: number): string {
    return `${this.animationKey}-${index}`;
  }

  translateText(){
    if(this.currentLang ==="en"){
      this.currentLang="kr";
      this.refreshWords(this.krTexts[this.currentTextIndex]);
    }
    else{
      this.currentLang="en";
      this.refreshWords(this.enTexts[this.currentTextIndex]);
    }
  }

  prevText(){
    if(this.currentTextIndex > 0){
      this.currentTextIndex--;
      this.rightButtonVisible = true;
      if(this.currentLang ==="en"){
        this.refreshWords(this.enTexts[this.currentTextIndex]);
      }
      else{
        this.refreshWords(this.krTexts[this.currentTextIndex]);
      }
    }
      if(this.currentTextIndex ===0){
        this.leftButtonVisible = false;
        this.rightButtonVisible = true;
      }
  }

  nextText(){
    if(this.currentTextIndex < this.enTexts.length -1){
      this.currentTextIndex++;
      this.leftButtonVisible = true;
      if(this.currentLang ==="en"){
        this.refreshWords(this.enTexts[this.currentTextIndex]);
      }
      else{
        this.refreshWords(this.krTexts[this.currentTextIndex]);
      }
    }
      if(this.currentTextIndex === this.enTexts.length -1)
        this.rightButtonVisible = false;   
  }

  startEating() {
    if (this.finished) {
      this.resetChocolate();
      return;
    }
    if (this.finished) return;

    this.intervalId = setInterval(() => {
      if (this.eatenHeight >= 240) {
        this.eatenHeight = 240;
        this.finished = true;
        this.stopEating();
      } else {
        this.eatenHeight += 2; // eating speed
      }
    }, 30);
  }

  stopEating() {
    clearInterval(this.intervalId);
  }

  private resetChocolate() {
    this.eatenHeight = 0;
    this.finished = false;
    this.stopEating();
  }
}
