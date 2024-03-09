import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-course-card',
  standalone: true,
  imports: [],
  templateUrl: './student-course-card.component.html',
  styleUrl: './student-course-card.component.scss'
})
export class StudentCourseCardComponent {
  @Input() courseName: string = '';
  @Input() courseAuthor: string ='';
  @Input() imageUrl: string ='';
}
