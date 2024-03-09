import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SummaryDialogComponent } from '../../features/student-dashboard/dialogs/summary-dialog/summary-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class OpenSummaryService {

  constructor(private dialog: MatDialog) { }

  openSummary(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'center-dialog';
    //dialogConfig.position = { top: '50%', left: '50%'}
    
    this.dialog.open(SummaryDialogComponent, dialogConfig);
  }
}
