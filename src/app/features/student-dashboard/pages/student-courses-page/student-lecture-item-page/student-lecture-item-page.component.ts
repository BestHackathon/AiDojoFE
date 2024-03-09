import { Component } from '@angular/core';
import { OpenFlashcardsService } from '../../../../../core/services/open-flashcards.service';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardsDialogComponent } from '../../../dialogs/flashcards-dialog/flashcards-dialog.component';
import { QuizDialogComponent } from '../../../dialogs/quiz-dialog/quiz-dialog.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-student-lecture-item-page',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './student-lecture-item-page.component.html',
  styleUrl: './student-lecture-item-page.component.scss'
})
export class StudentLectureItemPageComponent {


  constructor(private openFlashcardsService: OpenFlashcardsService, public dialog: MatDialog) {}

  openFlashbacks(): void {
    const dialogRef = this.dialog.open(FlashcardsDialogComponent, {
      
    })
  }
  openQuiz(): void {
    const dialogRef = this.dialog.open(QuizDialogComponent, {});
  }
}
