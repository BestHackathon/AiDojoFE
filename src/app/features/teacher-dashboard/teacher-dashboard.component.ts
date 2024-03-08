import { Component } from '@angular/core';
import { TeacherSidebarComponent } from "./layout/teacher-sidebar/teacher-sidebar.component";
import { TeacherHeaderComponent } from "./layout/teacher-header/teacher-header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-teacher-dashboard',
    standalone: true,
    templateUrl: './teacher-dashboard.component.html',
    styleUrl: './teacher-dashboard.component.scss',
    imports: [TeacherSidebarComponent, TeacherHeaderComponent, RouterModule]
})
export class TeacherDashboardComponent {

}
