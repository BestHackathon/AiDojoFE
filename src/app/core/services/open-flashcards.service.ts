import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FlashcardsDialogComponent } from '../../features/student-dashboard/dialogs/flashcards-dialog/flashcards-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class OpenFlashcardsService {

  constructor(private dialog: MatDialog) { }

  openFlashcards(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'center-dialog';
    //dialogConfig.position = { top: '50%', left: '50%'}
    
    this.dialog.open(FlashcardsDialogComponent, dialogConfig);
  }
}
