import { Component, OnInit } from '@angular/core';
import { OpenFlashcardsService } from '../../../../../core/services/open-flashcards.service';
import { MatDialog } from '@angular/material/dialog';
import { FlashcardsDialogComponent } from '../../../dialogs/flashcards-dialog/flashcards-dialog.component';
import { QuizDialogComponent } from '../../../dialogs/quiz-dialog/quiz-dialog.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from '../../../dialogs/quiz-dialog/components/start/start.component';
import { CommonModule } from '@angular/common';
import { OpenSummaryService } from '../../../../../core/services/open-summary.service';
import { SummaryDialogComponent } from '../../../dialogs/summary-dialog/summary-dialog.component';
import { ApiRecommendationService } from '../../../../../core/services/api-recommendation.service';
import { CutTillCommaPipe } from "../../../../../core/pipes/cut-till-comma.pipe";
//import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';


@Component({
    selector: 'app-student-lecture-item-page',
    standalone: true,
    templateUrl: './student-lecture-item-page.component.html',
    styleUrl: './student-lecture-item-page.component.scss',
    imports: [RouterModule, CommonModule, CutTillCommaPipe]
})
export class StudentLectureItemPageComponent implements OnInit {
pdfSrc: any;

  id: number = 1;
  recommendations: any;

  constructor(private openFlashcardsService: OpenFlashcardsService,
    private openSummaryService: OpenSummaryService,
     public dialog: MatDialog,
     private apiRecommendation: ApiRecommendationService) {}

  openFlashbacks(): void {
    const dialogRef = this.dialog.open(FlashcardsDialogComponent, {
      
    })
  }
  openSummary(): void {
    const dialogRef = this.dialog.open(SummaryDialogComponent, {
      
    })
  }
  openQuiz(): void {
    const dialogRef = this.dialog.open(QuizDialogComponent, {
      data: { component: StartComponent}
    });
  }
  ngOnInit(): void {
    this.apiRecommendation.getRecommendations(this.id).subscribe((data) => {
      this.recommendations = data;
    })
  }
}
