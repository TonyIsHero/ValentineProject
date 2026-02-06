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
    return getIndexByKey(this.dayKey);
  }

  get unlockedIndex(): number {
    return getUnlockedIndex(new Date());
  }

  get canGoBack(): boolean {
    return this.currentIndex > 0;
  }

  get canGoForward(): boolean {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) return this.currentIndex < VALENTINE_DAYS.length - 1;
    if (this.currentIndex < 0) return false;
    const nextIndex = this.currentIndex + 1;
    if (this.unlockedIndex === -1) return false;
    return nextIndex <= this.unlockedIndex;
  }

  goBack(): void {
    if (!this.canGoBack) return;
    const prevKey = VALENTINE_DAYS[this.currentIndex - 1].key;
    this.router.navigate(['/home', prevKey]);
  }

  goForward(): void {
    if (!this.canGoForward) return;
    const nextKey = VALENTINE_DAYS[this.currentIndex + 1].key;
    this.router.navigate(['/home', nextKey]);
  }

  logOff(): void {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/auth']);
  }
}
