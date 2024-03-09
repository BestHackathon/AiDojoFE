import { Component } from '@angular/core';
import { TeacherStudentCardComponent } from "./teacher-student-card/teacher-student-card.component";

@Component({
    selector: 'app-teacher-students-page',
    standalone: true,
    templateUrl: './teacher-students-page.component.html',
    styleUrl: './teacher-students-page.component.scss',
    imports: [TeacherStudentCardComponent]
})
export class TeacherStudentsPageComponent {

}
