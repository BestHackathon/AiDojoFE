import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherDashboardComponent } from "./features/teacher-dashboard/teacher-dashboard.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CutTillCommaPipe } from './core/pipes/cut-till-comma.pipe';
//import { IgxCarouselModule } from 'igniteui-angular';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, TeacherDashboardComponent, CutTillCommaPipe]
})
export class AppComponent {
  title = 'AiLearnerFE';
}
