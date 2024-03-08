import { Routes } from '@angular/router';
import { TeacherDashboardComponent } from './features/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesPageComponent } from './features/teacher-dashboard/pages/teacher-courses-page/teacher-courses-page.component';
import { TeacherStudentsPageComponent } from './features/teacher-dashboard/pages/teacher-students-page/teacher-students-page.component';

export const routes: Routes = [
    {path: 'teacher', component: TeacherDashboardComponent, children: [
        {path: 'courses', component: TeacherCoursesPageComponent},
        {path: 'students', component: TeacherStudentsPageComponent}
    ]}
];
