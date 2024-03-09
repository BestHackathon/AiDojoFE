import { Routes } from '@angular/router';
import { TeacherDashboardComponent } from './features/teacher-dashboard/teacher-dashboard.component';
import { TeacherCoursesPageComponent } from './features/teacher-dashboard/pages/teacher-courses-page/teacher-courses-page.component';
import { TeacherStudentsPageComponent } from './features/teacher-dashboard/pages/teacher-students-page/teacher-students-page.component';
import { TeacherHomePageComponent } from './features/teacher-dashboard/pages/teacher-home-page/teacher-home-page.component';
import { StudentDashboardComponent } from './features/student-dashboard/student-dashboard.component';
import { StudentHomePageComponent } from './features/student-dashboard/pages/student-home-page/student-home-page.component';
import { StudentCoursesPageComponent } from './features/student-dashboard/pages/student-courses-page/student-courses-page.component';
import { StudentCourseItemPageComponent } from './features/student-dashboard/pages/student-courses-page/student-course-item-page/student-course-item-page.component';
import { StudentLectureItemPageComponent } from './features/student-dashboard/pages/student-courses-page/student-lecture-item-page/student-lecture-item-page.component';
import { LoginPageComponent } from './core/auth/components/login-page/login-page.component';
import { StartComponent } from './features/student-dashboard/dialogs/quiz-dialog/components/start/start.component';
import { Q1Component } from './features/student-dashboard/dialogs/quiz-dialog/components/q1/q1.component';
import { Q2Component } from './features/student-dashboard/dialogs/quiz-dialog/components/q2/q2.component';
import { Q3Component } from './features/student-dashboard/dialogs/quiz-dialog/components/q3/q3.component';
import { Q4Component } from './features/student-dashboard/dialogs/quiz-dialog/components/q4/q4.component';
import { Q5Component } from './features/student-dashboard/dialogs/quiz-dialog/components/q5/q5.component';
import { FinishComponent } from './features/student-dashboard/dialogs/quiz-dialog/components/finish/finish.component';

export const routes: Routes = [
    {path:'',redirectTo: '/login', pathMatch:'full' },
    {path: 'teacher', component: TeacherDashboardComponent, children: [
        {path: 'home', component: TeacherHomePageComponent},
        {path: 'courses', component: TeacherCoursesPageComponent},
        {path: 'students', component: TeacherStudentsPageComponent}
    ]},
    {path: 'student', component: StudentDashboardComponent, children: [
        {path: '', component: StudentHomePageComponent},
        {path: 'courses', children: [
            {path: '',component: StudentCoursesPageComponent},
            {path:'course', children: [
                {path:'',component: StudentCourseItemPageComponent},
                {path:'lecture',  children: [
                    {path: '', component:StudentLectureItemPageComponent,},
                    {path: 'quiz', children: [
                        {path:'start', component: StartComponent},
                        {path:'1', component: Q1Component},
                        {path:'2',component: Q2Component},
                        {path:'3', component: Q3Component},
                        {path:'4', component: Q4Component},
                        {path: '5', component: Q5Component},
                        {path: 'results', component: FinishComponent}
                
                    ]}
                ]}
            ]}
        ]},
        
    ]},
    {path:'login', component: LoginPageComponent},
    
];
