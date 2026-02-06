import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthed = localStorage.getItem('isAuthenticated') === 'true';
  if (isAuthed) return true;
  router.navigate(['/auth']);
  return false;
};
