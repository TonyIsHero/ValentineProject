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

  private intervalId: any;

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
