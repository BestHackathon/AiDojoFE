import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ApiSummaryService } from '../../../../core/services/api-summary.service';
@Component({
  selector: 'app-summary-dialog',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './summary-dialog.component.html',
  styleUrl: './summary-dialog.component.scss'
})
export class SummaryDialogComponent implements OnInit {
  summary: string = '';
  id: number = 1;
  constructor(private apiSummary: ApiSummaryService) {}
  ngOnInit(): void {
    this.apiSummary.getSummary(this.id).subscribe((data) => {
      this.summary = data;
    })
  }
}
