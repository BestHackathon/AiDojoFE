import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FlashcardComponent } from "./flashcard/flashcard.component";
import { ApiFlashcardsService } from '../../../../core/services/api-flashcards.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-flashcards-dialog',
    standalone: true,
    templateUrl: './flashcards-dialog.component.html',
    styleUrl: './flashcards-dialog.component.scss',
    imports: [FlashcardComponent]
})
export class FlashcardsDialogComponent implements OnInit {
  id1: number = 1;
  id2: number = 2;
  current: number =1;
  total: number = 0;
  constructor(private dialogRef: MatDialogRef<FlashcardsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiFlashcardsService, private router: Router
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  flashcardList: any;
  clickFunction(): void {
    this.id2 += 1;
    this.current++;
    this.apiService.getFlashcards(this.id1,this.id2).subscribe((data) => {
      this.flashcardList = data;
    })
  }
  ngOnInit(): void {

    this.apiService.getFlashcards(this.id1,this.id2).subscribe((data) => {
      this.flashcardList = data;
      this.total = this.flashcardList.length();
    })
  }
  
  

  
}
