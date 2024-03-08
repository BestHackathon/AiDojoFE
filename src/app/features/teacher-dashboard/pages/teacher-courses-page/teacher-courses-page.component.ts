import { Component } from '@angular/core';
import { TeacherCourseCardComponent } from "./teacher-course-card/teacher-course-card.component";

@Component({
    selector: 'app-teacher-courses-page',
    standalone: true,
    templateUrl: './teacher-courses-page.component.html',
    styleUrl: './teacher-courses-page.component.scss',
    imports: [TeacherCourseCardComponent]
})
export class TeacherCoursesPageComponent {

}
