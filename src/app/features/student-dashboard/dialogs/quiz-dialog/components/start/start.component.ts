import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { QuizDialogService } from '../../../../../../core/services/quiz-dialog.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent  {
  constructor(private router: Router,
    private dialogService: QuizDialogService) { }

  

  @Output() switchToQ1Event = new EventEmitter<void>();

  openDialogWithQ2(): void {
    this.dialogService.openDialogWithQ2Component();
  }
  goToNextRoute(): void {
    // Navigate to the 'results' route when the button is clicked
    this.router.navigate(['/student/courses/course/lecture/quiz/results']);
  }
}
