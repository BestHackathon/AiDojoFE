import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  selectedRole: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.selectedRole === 'teacher') {
      this.authService.login('teacher');
      this.router.navigate(['/teacher']);
    } else if (this.selectedRole === 'student') {
      this.authService.login('student');
      this.router.navigate(['/student']);
    }
  }
}
