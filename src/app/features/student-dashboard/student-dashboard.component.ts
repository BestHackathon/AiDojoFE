import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentSidebarComponent } from "./layout/student-sidebar/student-sidebar.component";
import { StudentHeaderComponent } from "./layout/student-header/student-header.component";
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { CutTillCommaPipe } from '../../core/pipes/cut-till-comma.pipe';

@Component({
    selector: 'app-student-dashboard',
    standalone: true,
    templateUrl: './student-dashboard.component.html',
    styleUrl: './student-dashboard.component.scss',
    imports: [RouterModule, StudentSidebarComponent, StudentHeaderComponent, CutTillCommaPipe]
})
export class StudentDashboardComponent {

}
