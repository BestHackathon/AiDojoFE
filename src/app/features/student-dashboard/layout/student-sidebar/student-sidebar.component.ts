import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-student-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './student-sidebar.component.html',
  styleUrl: './student-sidebar.component.scss'
})
export class StudentSidebarComponent {
  constructor(private authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
}
