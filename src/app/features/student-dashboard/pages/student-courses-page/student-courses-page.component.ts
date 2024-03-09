import { Component } from '@angular/core';
import { StudentCourseCardComponent } from "./student-course-card/student-course-card.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-student-courses-page',
    standalone: true,
    templateUrl: './student-courses-page.component.html',
    styleUrl: './student-courses-page.component.scss',
    imports: [StudentCourseCardComponent, RouterModule]
})
export class StudentCoursesPageComponent {

}
