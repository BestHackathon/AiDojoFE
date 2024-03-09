import { Routes } from '@angular/router';
import { TeacherDashboardComponent } from './features/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesPageComponent } from './features/teacher-dashboard/pages/teacher-courses-page/teacher-courses-page.component';
import { TeacherStudentsPageComponent } from './features/teacher-dashboard/pages/teacher-students-page/teacher-students-page.component';
import { TeacherHomePageComponent } from './features/teacher-dashboard/pages/teacher-home-page/teacher-home-page.component';
import { StudentDashboardComponent } from './features/student-dashboard/student-dashboard.component';
import { StudentHomePageComponent } from './features/student-dashboard/pages/student-home-page/student-home-page.component';
import { StudentCoursesPageComponent } from './features/student-dashboard/pages/student-courses-page/student-courses-page.component';

export const routes: Routes = [
    {path: 'teacher', component: TeacherDashboardComponent, children: [
        {path: 'home', component: TeacherHomePageComponent},
        {path: 'courses', component: TeacherCoursesPageComponent},
        {path: 'students', component: TeacherStudentsPageComponent}
    ]},
    {path: 'student', component: StudentDashboardComponent, children: [
        {path: 'home', component: StudentHomePageComponent},
        {path: 'courses', component: StudentCoursesPageComponent}
    ]}
];
