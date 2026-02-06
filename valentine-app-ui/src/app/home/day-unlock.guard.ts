import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DayKey, getIndexByKey, getUnlockedIndex, VALENTINE_DAYS } from './valentine-days';

export const dayUnlockGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  if (isAdmin) return true;
  const dayKey = route.data['dayKey'] as DayKey;
  const unlockedIndex = getUnlockedIndex(new Date());
  const index = getIndexByKey(dayKey);

  if (index === -1) return true;
  if (unlockedIndex === -1 && index === 0) return true;
  if (index <= unlockedIndex) return true;

  const targetKey =
    unlockedIndex >= 0 ? VALENTINE_DAYS[unlockedIndex].key : 'rose';
  router.navigate(['/home', targetKey]);
  return false;
};
