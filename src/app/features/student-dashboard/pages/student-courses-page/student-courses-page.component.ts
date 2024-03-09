import { Component } from '@angular/core';
import { StudentCourseCardComponent } from "./student-course-card/student-course-card.component";

@Component({
    selector: 'app-student-courses-page',
    standalone: true,
    templateUrl: './student-courses-page.component.html',
    styleUrl: './student-courses-page.component.scss',
    imports: [StudentCourseCardComponent]
})
export class StudentCoursesPageComponent {

}
