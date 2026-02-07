import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  DayKey,
  getIndexByKey,
  getUnlockedIndex,
  VALENTINE_DAYS,
} from '../valentine-days';

@Component({
  selector: 'app-day-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './day-nav.component.html',
  styleUrl: './day-nav.component.css',
})
export class DayNavComponent {
  @Input({ required: true }) dayKey!: DayKey;

  constructor(private router: Router) {}

  get currentIndex(): number {
    // Convert the current route's day key (e.g., 'hug') into its index in the timeline.
    return getIndexByKey(this.dayKey);
  }

  get unlockedIndex(): number {
    // Determine the latest day that should be unlocked based on today's date.
    return getUnlockedIndex(new Date());
  }

  get canGoBack(): boolean {
    // Back is allowed if we're not on the first day.
    return this.currentIndex > 0;
  }

  get canGoForward(): boolean {
    // Admin can jump to any future day regardless of date.
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) return this.currentIndex < VALENTINE_DAYS.length - 1;
    // For non-admins, forward is limited by the latest unlocked day.
    if (this.currentIndex < 0) return false;
    const nextIndex = this.currentIndex + 1;
    if (this.unlockedIndex === -1) return false;
    return nextIndex <= this.unlockedIndex;
  }

  goBack(): void {
    // Navigate to the previous day in the sequence.
    if (!this.canGoBack) return;
    const prevKey = VALENTINE_DAYS[this.currentIndex - 1].key;
    this.router.navigate(['/home', prevKey]);
  }

  goForward(): void {
    // Navigate to the next day in the sequence (if allowed).
    if (!this.canGoForward) return;
    const nextKey = VALENTINE_DAYS[this.currentIndex + 1].key;
    this.router.navigate(['/home', nextKey]);
  }

  logOff(): void {
    // Clear auth flags and return to the login screen.
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/auth']);
  }
}
