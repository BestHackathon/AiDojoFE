import { Component, ComponentFactoryResolver, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-dialog',
  standalone: true,
  imports: [MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  MatRadioModule,
RouterModule,
CommonModule],
  templateUrl: './quiz-dialog.component.html',
  styleUrl: './quiz-dialog.component.scss'
})
export class QuizDialogComponent {

  questions = [
    { title: 'Question 1', answers: ['Answer 1.1', 'Answer 1.2', 'Answer 1.3', 'Answer 1.4'] },
    // Add more questions as needed
  ];
  selectedAnswer: string | undefined;
  quizStarted = false;

startQuiz() {
  this.quizStarted = true;
}

  restartQuiz() {
    // Reset quiz logic here
    this.selectedAnswer = '';
  }
  
  constructor(private dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private componentFactoryResolver: ComponentFactoryResolver
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  @ViewChild('container', { read: ViewContainerRef, static: true }) container?: ViewContainerRef;

  loadComponent(component: any): void {
    this.container?.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.container?.createComponent(componentFactory);
  }

}
