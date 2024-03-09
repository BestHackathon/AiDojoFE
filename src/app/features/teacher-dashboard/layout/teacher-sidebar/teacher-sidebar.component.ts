import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/auth/services/auth.service';

@Component({
  selector: 'app-teacher-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './teacher-sidebar.component.html',
  styleUrl: './teacher-sidebar.component.scss'
})
export class TeacherSidebarComponent   {
  constructor(private authService: AuthService){

  }

  logout() {
    this.authService.logout();
  }
}
