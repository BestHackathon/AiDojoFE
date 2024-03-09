import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { FlashcardComponent } from "./flashcard/flashcard.component";

@Component({
    selector: 'app-flashcards-dialog',
    standalone: true,
    templateUrl: './flashcards-dialog.component.html',
    styleUrl: './flashcards-dialog.component.scss',
    imports: [FlashcardComponent]
})
export class FlashcardsDialogComponent {
  constructor(private dialogRef: MatDialogRef<FlashcardsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  
}
