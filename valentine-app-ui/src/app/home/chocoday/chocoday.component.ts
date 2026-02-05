import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chocoday',
  imports: [CommonModule],
  templateUrl: './chocoday.component.html',
  styleUrl: './chocoday.component.css'
})
export class ChocodayComponent {
  eatenHeight = 0;
  finished = false;

  text1Korean = "행복한 초콜릿 데이!";
  text1 ="Happy Chocolate Day!";

  text2Korean = "너와 함께라면 삶이 더 달콤해";
  text2= "Life is sweeter with you";
  private intervalId: any;

  currentLang ="en";
  wordDelay = 0.2;
  lineGap = 0.4;
  line2Start = 0;
  animationKey = 0;
  text1Words: string[] = [];
  text2Words: string[] = [];

  constructor() {
    this.refreshWords(this.text1, this.text2);
  }

  private splitWords(text: string): string[] {
    return text.trim().split(/\s+/);
  }

  private refreshWords(line1: string, line2: string) {
    this.text1Words = this.splitWords(line1);
    this.text2Words = this.splitWords(line2);
    this.line2Start = this.text1Words.length * this.wordDelay + this.lineGap;
    this.animationKey += 1;
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
      this.refreshWords(this.text1Korean, this.text2Korean);
    }
    else{
      this.currentLang="en";
      this.refreshWords(this.text1, this.text2);
    }
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
