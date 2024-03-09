import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-dialog',
  standalone: true,
  imports: [],
  templateUrl: './quiz-dialog.component.html',
  styleUrl: './quiz-dialog.component.scss'
})
export class QuizDialogComponent {
  constructor(private dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
