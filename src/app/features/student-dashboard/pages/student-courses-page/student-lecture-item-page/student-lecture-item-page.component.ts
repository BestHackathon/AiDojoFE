import { Component } from '@angular/core';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-student-lecture-item-page',
  standalone: true,
  imports: [],
  templateUrl: './student-lecture-item-page.component.html',
  styleUrl: './student-lecture-item-page.component.scss'
})
export class StudentLectureItemPageComponent {
  pdfSrc: "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf" | undefined;
}
