import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizDialogComponent } from '../../features/student-dashboard/dialogs/quiz-dialog/quiz-dialog.component';
import { Q1Component } from '../../features/student-dashboard/dialogs/quiz-dialog/components/q1/q1.component';
import { Q2Component } from '../../features/student-dashboard/dialogs/quiz-dialog/components/q2/q2.component';

@Injectable({
  providedIn: 'root'
})
export class QuizDialogService {

  constructor(private dialog: MatDialog) { }


  openDialogWithQ1Component(): void {
    const dialogRef = this.dialog.open(QuizDialogComponent);
    dialogRef.componentInstance.loadComponent(Q1Component);
  }

  openDialogWithQ2Component(): void {
    const dialogRef = this.dialog.open(QuizDialogComponent);
    dialogRef.componentInstance.loadComponent(Q2Component);
  }
}
