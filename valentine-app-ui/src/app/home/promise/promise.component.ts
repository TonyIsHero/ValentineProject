import { Component } from '@angular/core';
import { DayNavComponent } from '../day-nav/day-nav.component';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise',
  imports: [DayNavComponent, CommonModule, LottieComponent],
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.css'
})
export class PromiseComponent {
  handshakeOptions: AnimationOptions = {
    path: '/images/Handshake.json',
    autoplay: true,
    loop: true
  };

  flyingHeartsOptions: AnimationOptions = {
    path: '/images/heartsflying.json',
    autoplay: true,
    loop: true
  };

  pages = [
    'Hi!',
    'I’ve been thinking about us.',
    'A promise isn’t about being perfect.\nIt’s about being present.',
    'I promise to choose you, \nnot just today, but every day.',
    'Always. \n🤍'
  ];

  currentPage = 0;
  isFlipping = false;
  flipDirection: 'next' | 'prev' = 'next';
  pendingPageIndex: number | null = null;

  nextPage() {
    this.startFlip('next');
  }

  prevPage() {
    this.startFlip('prev');
  }

  private startFlip(direction: 'next' | 'prev') {
    if (this.isFlipping) {
      return;
    }

    const targetIndex =
      direction === 'next' ? this.currentPage + 1 : this.currentPage - 1;

    if (targetIndex < 0 || targetIndex >= this.pages.length) {
      return;
    }

    this.flipDirection = direction;
    this.pendingPageIndex = targetIndex;
    this.isFlipping = true;
  }

  onFlipEnd() {
    if (!this.isFlipping || this.pendingPageIndex === null) {
      return;
    }

    this.currentPage = this.pendingPageIndex;
    this.pendingPageIndex = null;
    this.isFlipping = false;
  }
}
