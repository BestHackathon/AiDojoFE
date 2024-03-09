import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      if (this.authService.userType === 'student') {
        this.router.navigate(['/student']);
      } else if (this.authService.userType === 'teacher') {
        this.router.navigate(['/teacher']);
      }
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
