import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
@Component({
  selector: 'app-summary-dialog',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './summary-dialog.component.html',
  styleUrl: './summary-dialog.component.scss'
})
export class SummaryDialogComponent {

}
