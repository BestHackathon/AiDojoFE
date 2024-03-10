import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  selectedRole: string | undefined = 'student';

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
